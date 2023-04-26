import { pool } from "./config/dbconfig";

export interface AccountsEmp {
  usuario_emp: string;
  pass_emp: string;
  id_emp: number;
}

export const getAllAccounts = (): Promise<AccountsEmp[]> => {
  return new Promise((resolve, reject) => {
    return pool.query("SELECT * FROM cuenta_emp", (error, results) => {
      if (error) {
        return reject(error);
      }
      return resolve(results);
    });
  });
};
