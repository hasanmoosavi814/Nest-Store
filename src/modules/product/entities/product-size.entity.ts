import { Column, Entity, ManyToOne } from "typeorm";
import { BaseEntity } from "src/common/abstract/base-entity";
import { EntityName } from "src/common/enums/entity.enum";
import { Product } from "./product.entity";

@Entity(EntityName.ProductSize)
export class ProductSize extends BaseEntity {
  @Column()
  productId: number;
  @Column()
  size: string;
  @Column()
  count: number;
  @Column({ type: "decimal" })
  price: number;
  @Column({ type: "decimal", default: 0 })
  discount: number;
  @Column({ default: false })
  active_discount: boolean;
  @ManyToOne(() => Product, product => product.size, { onDelete: "CASCADE" })
  product: Product
}
