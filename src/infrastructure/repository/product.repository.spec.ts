import { Sequelize } from "sequelize-typescript";
import ProductModel from "../db/sequelize/model/product.model";

describe("Product reposutory test",  () => {
  let sequelize: Sequelize;

  beforeEach(async () => {
    try {
      sequelize = new Sequelize({
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

})