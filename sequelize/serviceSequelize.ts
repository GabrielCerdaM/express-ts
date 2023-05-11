import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/sequelize";
class ServiceSequelize extends Model {}

ServiceSequelize.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true,
    },
    description: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
    userId: {
      type: DataTypes.NUMBER,
      allowNull: false,
      unique: true,
    },
    subCategoryId: {
      type: DataTypes.NUMBER,
      allowNull: false,
      field: "subcategoryId",
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      field: "created_at",
      // defaultValue: now,
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
    tableName: "services",
    timestamps: true,
    underscored: true,
    paranoid: true,
  }
);

export default ServiceSequelize;
