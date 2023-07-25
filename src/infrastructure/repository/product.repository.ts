import ProductRepositoryInterface from "../../domain/repository/product-repository.interface";
import Product from "../../domain/entity/product";
import ProductModel from "../db/sequelize/model/product.model";

export default class ProductRepository implements ProductRepositoryInterface {
  async create(entity: Product): Promise<void> {
    try {
      await ProductModel.create({
        id: entity.id,
        name: entity.name,
        price: entity.price
      })
    } catch (e) {
      console.log(e)
    }
  }

  async update(data, params): Promise<void> {
    try {
      await ProductModel.update(data, params)
    } catch (e) {
      console.log(e)
    }
  }

  async find(pk: string): Promise<ProductModel>{
    try {
      return ProductModel.findByPk(pk)
    } catch (e) {
      console.log(e)
    }
  }

  async findAll(): Promise<Product[]> {
    throw new Error("Method not implemented.");
  }
}