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
      allowNull: true,
      field: "duration",
    },
    durationType: {
      type: DataTypes.STRING(20),
      allowNull: false,
      field: "durationType",
      defaultValue: "Hrs",
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      field: "created_at",
      defaultValue: new Date(),
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
