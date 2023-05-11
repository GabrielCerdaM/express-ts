import { DataTypes, Model } from "sequelize";
import { sequelize } from "./config/sequelize";
import ServiceSequelize from "./sequelize/serviceSequelize";
export interface IService {
  id?: number;
  subcategoryId: number;
  name: string;
  description: string;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;
}

class Service extends ServiceSequelize implements IService {
  id?: number;
  subcategoryId: number;
  name: string;
  description: string;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;
  constructor(
    subcategoryId: number,
    name: string,
    description: string,
    id?: number,
    created_at?: Date,
    updated_at?: Date,
    deleted_at?: Date
  ) {
    super();
    this.name = name;
    this.description = description;
    this.subcategoryId = subcategoryId;
    this.created_at = created_at;
    this.updated_at = updated_at;
    this.deleted_at = deleted_at;
  }
}

export default Service;
