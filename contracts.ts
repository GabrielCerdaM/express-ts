import { pool } from "./config/dbconfig";

export interface Contract {
  id: number;
  serviceId: number;
  offeredById: number;
  clientId: number;
  name: string;
  price: number;
  duration: string;
  created_at: string;
  updated_at: string;
  deleted_at: string;
}

export const getAllContracts = (): Promise<Contract[]> => {
  return new Promise((resolve, reject) => {
    return pool.query("SELECT * FROM contracts", (error, results) => {
      if (error) {
        return reject(error);
      }
      return resolve(results);
    });
  });
};
