import { Column, Entity, ManyToOne } from "typeorm";
import { BaseEntity } from "src/common/abstarct/base-entity";
import { EntityName } from "src/common/enums/entity.enum";
import { Product } from "./product.entity";

@Entity(EntityName.ProductDetail)
export class ProductDetail extends BaseEntity {
  @Column()
  productId: number;
  @Column()
  key: string;
  @Column()
  value: string;
  @ManyToOne(() => Product, product => product.detail, { onDelete: "CASCADE" })
  product: Product
}
