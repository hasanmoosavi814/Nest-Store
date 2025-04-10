import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { config } from 'dotenv';
import { Product } from 'src/modules/product/entities/product.entity';
import { ProductColor } from 'src/modules/product/entities/product-color.entity';
import { ProductSize } from 'src/modules/product/entities/product-size.entity';
import { ProductDetail } from 'src/modules/product/entities/product-detail.entity';

config(); // load .env

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: process.env.DB_HOST,
  port: +(process.env.DB_PORT || 3306),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [Product, ProductColor, ProductSize, ProductDetail],
  migrations: [__dirname + '/migrations/*{.ts,.js}'],
});
