import { Column, CreateDateColumn, Entity, OneToMany } from "typeorm";
import { ProductDetail } from "./product-detail.entity";
import { ProductColor } from "./product-color.entity";
import { ProductSize } from "./product-size.entity";
import { ProductType } from "../enum/type.enum";
import { EntityName } from "src/common/enums/entity.enum";
import { BaseEntity } from "src/common/abstract/base-entity";

@Entity(EntityName.Product)
export class Product extends BaseEntity {
  @Column()
  title: string;

  @Column()
  content: string;

  @Column()
  slug: string;

  @Column()
  code: string;

  @Column({ type: 'enum', enum: ProductType })
  type: string;

  @Column({ default: 0 })
  count: number;

  @Column({ type: "decimal", nullable: true })
  price: number;

  @Column({ type: "decimal", nullable: true, default: 0 })
  discount: number;

  @Column({ nullable: true, default: false })
  active_discount: boolean;

  @CreateDateColumn()
  created_at: Date;

  @OneToMany(() => ProductDetail, detail => detail.product)
  detail: ProductDetail[];

  @OneToMany(() => ProductColor, color => color.product)
  color: ProductColor[];

  @OneToMany(() => ProductSize, size => size.product)
  size: ProductSize[];
}
