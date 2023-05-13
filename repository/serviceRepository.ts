import { sequelize } from "../config/sequelize";
import ServiceSequelize from "../sequelize/serviceSequelize";
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
