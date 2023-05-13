import { pool } from "./config/dbconfig";
import ContractSequelize from "./sequelize/contractSequelize";

export interface IContract {
  id: number;
  serviceId: number;
  clientId: number;
  name: string;
  price: number;
  duration: string;
  durationType: string;
  created_at: string;
  updated_at: string;
  deleted_at: string;
}

class Contract extends ContractSequelize implements IContract {
  id: number;
  serviceId: number;
  clientId: number;
  name: string;
  price: number;
  duration: string;
  durationType: string;
  created_at: string;
  updated_at: string;
  deleted_at: string;
  constructor(
    id: number,
    serviceId: number,
    clientId: number,
    name: string,
    price: number,
    duration: string,
    durationType: string,
    created_at: string,
    updated_at: string,
    deleted_at: string
  ) {
    super();
    this.id = id;
    this.serviceId = serviceId;
    this.clientId = clientId;
    this.name = name;
    this.price = price;
    this.duration = duration;
    this.durationType = durationType;
    this.created_at = created_at;
    this.updated_at = updated_at;
    this.deleted_at = deleted_at;
  }
}

export default Contract;
