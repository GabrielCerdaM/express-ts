"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const contractSequelize_1 = __importDefault(require("./sequelize/contractSequelize"));
class Contract extends contractSequelize_1.default {
    constructor(id, serviceId, clientId, name, price, duration, durationType, created_at, updated_at, deleted_at) {
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
exports.default = Contract;
