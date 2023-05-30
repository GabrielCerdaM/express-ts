import { sequelize } from "../config/sequelize";
import ServiceSequelize from "../sequelize/serviceSequelize";
import SubcategorySequelize from "../sequelize/subCategorySequelize";
import UserSequelize from "../sequelize/userSequelize";

export const getAllServices = (): Promise<ServiceSequelize[]> => {
  return new Promise(async (resolve, reject) => {
    try {
      const services = await ServiceSequelize.findAll({
        include: UserSequelize,
      });
      // if (services) {
      //   reject(null);
      // }
      resolve(services);
    } catch (error) {
      reject(JSON.stringify(error));
    }
  });
};

export const getService = (id: number): Promise<ServiceSequelize | null> => {
  return new Promise(async (resolve, reject) => {
    try {
      const service = await ServiceSequelize.findByPk(id, {
        include: { all: true, nested: true },
      });
      console.log(service);
      resolve(service);
    } catch (error) {
      reject(JSON.stringify(error));
    }
  });
};
