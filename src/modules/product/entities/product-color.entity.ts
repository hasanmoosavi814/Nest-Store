import { Column, Entity, ManyToOne } from "typeorm";
import { BaseEntity } from "src/common/abstarct/base-entity";
import { EntityName } from "src/common/enums/entity.enum";
import { Product } from "./product.entity";

@Entity(EntityName.ProductColor)
export class ProductColor extends BaseEntity {
  @Column()
  productId: number;
  @Column()
  color_name: string;
  @Column()
  color_code: string;
  @Column()
  count: number;
  @Column({ type: "decimal" })
  price: number;
  @Column({ type: "decimal", default: 0 })
  discount: number;
  @Column({ default: false })
  active_discount: boolean;
  @ManyToOne(() => Product, product => product.color, { onDelete: "CASCADE" })
  product: Product
}
