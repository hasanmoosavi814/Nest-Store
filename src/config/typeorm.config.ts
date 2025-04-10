import { TypeOrmModuleOptions } from "@nestjs/typeorm"
import { ProductDetail } from "src/modules/product/entities/product-detail.entoty"
import { ProductColor } from "src/modules/product/entities/product-color.entity"
import { ProductSize } from "src/modules/product/entities/product-size.entity"
import { Product } from "src/modules/product/entities/product.entity"


export function TypeOrmConfig(): TypeOrmModuleOptions {
  const { DB_HOST, DB_NAME, DB_PASSWORD, DB_PORT, DB_USERNAME } = process.env
  console.log(DB_HOST)
  return {
    type: "mysql",
    host: DB_HOST,
    port: +DB_PORT,
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_NAME,
    autoLoadEntities: false,
    synchronize: true,
    entities: [
      Product,
      ProductSize,
      ProductColor,
      ProductDetail,
    ]
  }
}