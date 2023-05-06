import UserSequelize from "./sequelize/userSequelize";

export interface IUser {
  id?: number;
  email: string;
  password: string;
  username: string;
  name: string;
  lastname: string;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;
}

class User extends UserSequelize implements IUser {
  id?: number;
  email: string;
  password: string;
  username: string;
  name: string;
  lastname: string;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;

  constructor(
    email: string,
    password: string,
    username: string,
    name: string,
    lastname: string,
    id?: number,
    created_at?: Date,
    updated_at?: Date,
    deleted_at?: Date
  ) {
    super();
    this.id = id;
    this.email = email;
    this.password = password;
    this.username = username;
    this.name = name;
    this.lastname = lastname;
    this.created_at = created_at;
    this.updated_at = updated_at;
    this.deleted_at = deleted_at;
  }
}

export default User;
