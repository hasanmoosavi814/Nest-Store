import { ProductDetailController } from './controllers/product-detail.controller';
import { ProductColorController } from './controllers/product-color.controller';
import { ProductSizeController } from './controllers/product-size.controller';
import { ProductController } from './controllers/product.controller';
import { ProductService } from './services/product.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductDetail } from './entities/product-detail.entoty';
import { ProductColor } from './entities/product-color.entity';
import { ProductSize } from './entities/product-size.entity';
import { Product } from './entities/product.entity';
import { Module } from '@nestjs/common';

@Module({
  imports: [TypeOrmModule.forFeature([Product, ProductColor, ProductSize, ProductDetail])],
  controllers: [ProductController, ProductSizeController, ProductColorController, ProductDetailController],
  providers: [ProductService],
})
export class ProductModule { }
