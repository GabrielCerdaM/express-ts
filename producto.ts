import { pool } from "./config/dbconfig";

export interface Producto {
  nombre_pdt: string;
  marca: string;
  stock: string;
  precio: number;
  id_cate_pdt: number;
  id_proveedor: number;
}

export const getAllProductos = (): Promise<Producto[]> => {
  return new Promise((resolve, reject) => {
    return pool.query("SELECT * FROM producto", (error, results) => {
      if (error) {
        return reject(error);
      }
      return resolve(results);
    });
    // pool.query('SELECT * FROM users', (error, results) => {
    //   if (error) {
    //     return reject(error);
    //   }
    //   return resolve(results);
    // });
  });
};
