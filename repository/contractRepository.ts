import { pool } from "../config/dbconfig";
import User from "../users";
import { sequelize } from "../config/sequelize";
import UserSequelize from "../sequelize/userSequelize";
import ContractSequelize from "../sequelize/contractSequelize";
import ServiceSequelize from "../sequelize/serviceSequelize";

export const getAllContracts = async (): Promise<
  ContractSequelize[] | null
> => {
  return new Promise(async (resolve, reject) => {
    try {
      const contracts = await ContractSequelize.findAll({
        include: [UserSequelize, ServiceSequelize],
      });
      console.log({ contracts });

      if (!contracts) {
        throw new Error();
      }
      resolve(contracts);
    } catch (error) {
      console.log({ error });
      reject(null);
    }
  });
};
