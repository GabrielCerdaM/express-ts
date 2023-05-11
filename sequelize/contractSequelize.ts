import { Model, DataTypes } from "sequelize";
import { sequelize } from "../config/sequelize";

class ContractSequelize extends Model {}

ContractSequelize.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    serviceId: {
      type: DataTypes.NUMBER,
      allowNull: false,
      unique: true,
      field: "serviceId",
    },
    offerById: {
      type: DataTypes.NUMBER,
      allowNull: false,
      unique: true,
      field: "offerById",
    },
    clientId: {
      type: DataTypes.NUMBER,
      allowNull: false,
      unique: true,
      field: "clientId",
    },
    name: {
      type: DataTypes.STRING(200),
      allowNull: false,
      field: "name",
    },
    price: {
      type: DataTypes.NUMBER,
      allowNull: false,
      unique: false,
      field: "price",
    },
    duration: {
      type: DataTypes.NUMBER,
      allowNull: false,
      field: "duration",
    },
    durationType: {
      type: DataTypes.STRING(20),
      allowNull: false,
      field: "durationType",
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      field: "created_at",
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: true,
      field: "updated_at",
    },
    deleted_at: {
      type: DataTypes.DATE,
      allowNull: true,
      field: "deleted_at",
    },
  },
  {
    sequelize,
    tableName: "contracts",
    timestamps: true,
    underscored: true,
    paranoid: true,
    indexes: [
      {
        unique: true,
        fields: ["email"],
      },
      {
        unique: true,
        fields: ["username"],
      },
    ],
  }
);

export default ContractSequelize;
