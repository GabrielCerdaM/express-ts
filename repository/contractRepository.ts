import { pool } from "../config/dbconfig";
import User from "../users";
import { sequelize } from "../config/sequelize";
import UserSequelize from "../sequelize/userSequelize";
import ContractSequelize from "../sequelize/contractSequelize";

export const getAllContracts = async (): Promise<
  ContractSequelize[] | null
> => {
  const contracts = await ContractSequelize.findAll();
  return contracts ?? null;
};
