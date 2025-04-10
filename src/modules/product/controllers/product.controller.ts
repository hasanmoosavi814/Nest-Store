import { Controller, Get, Post, Body, Param, Delete, Put, ParseIntPipe } from '@nestjs/common';
import { CreateProductDto, UpdateProductDto } from '../dto/product.dto';
import { ApiConsumes, ApiTags } from '@nestjs/swagger';
import { SwaggerConsumes } from 'src/common/enums/swagger-consumes';
import { ProductService } from '../services/product.service';

@Controller('product')
@ApiTags("Product")
export class ProductController {
  constructor(private readonly productService: ProductService) { }

  @Post()
  @ApiConsumes(SwaggerConsumes.UrlEncoded)
  create(@Body() productDto: CreateProductDto) { }

  @Get()
  findAll(@Body() productDto: CreateProductDto) { }

  @Put(':id')
  @ApiConsumes(SwaggerConsumes.UrlEncoded)
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() productDto: UpdateProductDto
  ) { }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) { }
}
