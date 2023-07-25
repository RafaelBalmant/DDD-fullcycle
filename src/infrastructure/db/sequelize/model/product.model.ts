import {Column, PrimaryKey, Table, Model} from "sequelize-typescript";
import Product from "../../../../domain/entity/product";
import {CreationAttributes, InferAttributes} from "sequelize";
type ProductAttributes = {
  id: number;
  name: string;
  price: number;
}

@Table({
  tableName: 'product',
  timestamps: false,
})
export default class ProductModel extends Model<InferAttributes<Product>, CreationAttributes<Product>>{
  @PrimaryKey
  @Column
  declare id: string;

  @Column({allowNull: false })
  declare name: string;

  @Column({allowNull: false })
  declare price: number;
}