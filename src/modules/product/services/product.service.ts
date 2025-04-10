import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { BadRequestMessage, NotFoundMessage, PublicMessage } from '../enum/message.enum';
import { CreateProductDto, UpdateProductDto } from '../dto/product.dto';
import { DeepPartial, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductType } from '../enum/type.enum';
import { toBoolean } from 'src/common/utils/functions';
import { Product } from '../entities/product.entity';

@Injectable()
export class ProductService {
  constructor(@InjectRepository(Product) private productRepository: Repository<Product>) { }

  async create(productDto: CreateProductDto) {
    const { title, slug, active_discount: active_discount, code, content, count, discount, price, type } = productDto
    const productObject: DeepPartial<Product> = { title, content, slug, code, discount, active_discount: toBoolean(active_discount) }
    if (type === ProductType.Single) Object.assign(productObject, { price, count, type })
    else if ([ProductType.Coloring, ProductType.Sizing].includes(type as any)) productObject["type"] = type
    else throw new BadRequestException(BadRequestMessage.BadRequest)
    await this.productRepository.save(productObject)
    return { message: PublicMessage.CreateProduct }
  }

  async update(id: number, productDto: UpdateProductDto) {
    const { title, slug, active_discount, code, content, count, discount, price, type } = productDto;
    const product = await this.findOneLean(id);
    if (!product) throw new NotFoundException('Product not found');
    if (title !== undefined) product.title = title;
    if (slug !== undefined) product.slug = slug;
    if (content !== undefined) product.content = content;
    if (discount !== undefined) product.discount = discount;
    if (active_discount !== undefined) product.active_discount = toBoolean(active_discount);
    if (code !== undefined) product.code = code;
    if (type !== undefined) product.type = type;
    if (type === ProductType.Single) {
      if (price !== undefined) product.price = price;
      if (count !== undefined) product.count = count;
    }
    await this.productRepository.save(product);
    return { message: PublicMessage.UpdatedProduct };
  }


  async findAll() {
    return this.productRepository.find({
      where: {},
      relations: { color: true, size: true, detail: true }
    })
  }

  async findOneLean(id: number) {
    const product = this.productRepository.findOne({ where: { id } })
    if (!product) throw new NotFoundException(NotFoundMessage.NotFound)
    return product
  }

  async findOne(id: number) {
    const product = this.productRepository.findOne({
      where: { id },
      relations: { color: true, size: true, detail: true }
    })
    if (!product) throw new NotFoundException(NotFoundMessage.NotFound)
    return product
  }

  async delete(id: number) {
    await this.findOne(id)
    await this.productRepository.delete({ id })
    return { message: PublicMessage.DeletedProduct }
  }
}
