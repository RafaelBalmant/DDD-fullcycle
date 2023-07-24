import {Column, Model, PrimaryKey, Table} from "sequelize-typescript";

type ProductAttributes = {
  id: number;
  name: string;
  price: number;
}
@Table({
  tableName: 'product',
  timestamps: false,
})
export default class ProductModel extends Model {
  @PrimaryKey
  @Column
  declare id: number;

  @Column({allowNull: false })
  declare name: string;

  @Column({allowNull: false })
  declare price: number;
}