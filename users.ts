import { log } from "console";
import { pool } from "./config/dbconfig";

export interface User {
  email: string;
  password: string;
  username: string;
  name: string;
  lastname: string;
  created_at?: string;
  updated_at?: string;
  deleted_at?: string;
}

export const getAllUsers = (): Promise<User[]> => {
  return new Promise((resolve, reject) => {
    return pool.query("SELECT * FROM users", (error, results) => {
      if (error) {
        return reject(error);
      }
      return resolve(results);
    });
  });
};

export const getUserById = (id: number): Promise<User> => {
  return new Promise((resolve, reject) => {
    return pool.query(
      `SELECT * FROM users where id = ${id}`,
      (error, results) => {
        if (error) {
          return reject(error);
        }
        return resolve(results);
      }
    );
  });
};

export const getUserByEmail = (email: string): Promise<User> => {
  return new Promise((resolve, reject) => {
    return pool.query(
      `SELECT * FROM users where email =  ?`,
      email,
      (error, results) => {
        if (error) {
          return reject(error);
        }
        return resolve(results);
      }
    );
  });
};

export const register = (user: User): Promise<number> => {
  return new Promise((resolve, reject) => {
    const sql = "INSERT INTO users SET ?";
    return pool.query(sql, user, (error, results) => {
      if (error) {
        return reject(error);
      }
      return resolve(results.insertId);
    });
  });
};

export const exist = (email: string): Promise<boolean> => {
  return new Promise((resolve, reject) => {
    try {
      const user = getUser(userId);

      if (!user) {
        throw new Error(user);
      }
      return resolve(true);
    } catch (error) {
      return reject(false);
    }
  });
};
