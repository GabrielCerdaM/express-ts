import { pool } from "./config/dbconfig";

export interface Service {
  id: number;
  subcategoryId: number;
  name: string;
  description: string;
  created_at: string;
  updated_at: string;
  deleted_at: string;
}

export const getAllServices = (): Promise<Service[]> => {
  return new Promise((resolve, reject) => {
    return pool.query("SELECT * FROM services", (error, results) => {
      if (error) {
        return reject(error);
      }
      return resolve(results);
    });
  });
};

export const getAllServices2 = (): Promise<any[]> => {
  return new Promise((resolve, reject) => {
    return pool.query(
      `
    SELECT *
    FROM services
    INNER JOIN users ON services.userId = users.id
  `,
      (error, results) => {
        if (error) {
          return reject(error);
        }
        return resolve(results);
      }
    );
  });
};
