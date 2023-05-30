import { Model, DataTypes } from "sequelize";
import { sequelize } from "../config/sequelize";
import ContractSequelize from "./contractSequelize";
import { ISubcategory } from "../subCategory";

class SubcategorySequelize extends Model implements ISubcategory {
  public id!: number;
  public categoryId!: number;
  public name!: string;
  public description!: string;
  public created_at!: string;
  public updated_at!: string;
  public deleted_at!: string;
}

SubcategorySequelize.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    categoryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    deleted_at: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    sequelize,
    tableName: "subcategories",
    timestamps: true,
  }
);

SubcategorySequelize.belongsTo(ContractSequelize, { foreignKey: "id" });

export default SubcategorySequelize;
