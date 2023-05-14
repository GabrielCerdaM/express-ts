import { pool } from "../config/dbconfig";
import User from "../users";
import { sequelize } from "../config/sequelize";
import UserSequelize from "../sequelize/userSequelize";
import { log } from "console";

export const buscarUsuario = async (
  id: number
): Promise<UserSequelize | null> => {
  const usuarioEncontrado = await sequelize.models.User.findByPk(id);
  return usuarioEncontrado ?? null;
};

export const getAllUsers = (): Promise<UserSequelize[] | null> => {
  return new Promise(async (resolve, reject) => {
    const users = await UserSequelize.findAll();

    if (!users) {
      reject(null);
    }
    resolve(users);
  });
};

export const getUserById = (id: number): Promise<UserSequelize | null> => {
  return new Promise(async (resolve, reject) => {
    const user = await UserSequelize.findByPk(id);
    if (!user) {
      reject(null);
    }
    resolve(user);
  });
};

export const getUserByEmail = (
  email: string
): Promise<UserSequelize[] | null> => {
  return new Promise(async (resolve, reject) => {
    const user = await UserSequelize.findAll({
      where: { email },
    });
    if (!user || user.length < 1) {
      reject(null);
    }
    resolve(user);
  });
};

export const login = (email: string, password: string): Promise<boolean> => {
  return new Promise(async (resolve, reject) => {
    try {
      const user = await UserSequelize.findAll({
        where: {
          email,
          password,
        },
      });

      if (!user || user.length < 1) {
        throw new Error(`doesn't exist`);
      }
      resolve(true);
    } catch (error) {
      console.log({ error });
      reject(false);
    }
  });
};

export const register = (user: User): Promise<User | null> => {
  return new Promise(async (resolve, reject) => {
    const { email, password, username, name, lastname } = user;

    const userEmail = await getUserByEmail(email);

    if (user || userEmail.length > 0) {
      reject(null);
    }
    const savedUser = await user.save();
    console.log({ savedUser });

    // const newUser = new User(email, password, username, name, lastname);

    // await newUser.save();

    resolve(savedUser);
  });
};
