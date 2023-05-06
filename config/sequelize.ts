import { Sequelize } from "sequelize";

export const sequelize = new Sequelize(
  "mysql://root:olxdev9!@localhost:3306/bastian-gabriel"
);
