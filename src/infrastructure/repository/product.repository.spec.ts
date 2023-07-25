import { Sequelize } from "sequelize-typescript";
import ProductModel from "../db/sequelize/model/product.model";
import ProductRepository from "./product.repository";
import Product from "../../domain/entity/product";

describe("Product reposutory test",  () => {
  let sequelize: Sequelize;

  beforeEach(async () => {
    try {
      sequelize = await new Sequelize({
        dialect: 'sqlite',
        storage: ':memory:',
        logging: false,
        sync: { force: true },
      });

      sequelize.addModels([ProductModel]);

      await sequelize.sync();
    } catch (e) {
      console.log(e);
    }

  })


  afterEach(async () => {
    await sequelize.close();
  });

  it("should create a product", async () => {
    const newProduct = new Product("1", "Product 1", 100);
    const productRepository = new ProductRepository();
    await productRepository.create(newProduct);
    const product = await productRepository.find("1");
    expect(product.toJSON()).toStrictEqual({ id: "1", name: "Product 1", price: 100 });
  })


  it("should updated a product", async () => {
    const newProduct = new Product("1", "Product 1", 100);
    const productRepository =  new ProductRepository();
    await productRepository.create(newProduct);
    await productRepository.update({name: "updated Product 1"}, {where: {id: "1"}})
    const product = (await productRepository.find("1")).toJSON();
    expect(product.name).toEqual("updated Product 1")
  })
})