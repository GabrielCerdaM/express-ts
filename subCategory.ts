import { Category } from "./category";
import SubcategorySequelize from "./sequelize/subCategorySequelize";

export interface ISubcategory {
  id: number;
  categoryId: number;
  name: string;
  description: string;
  created_at: string;
  updated_at: string;
  deleted_at: string;
}

class Subcategory extends SubcategorySequelize implements ISubcategory {
  public id!: number;
  public categoryId!: number;
  public name!: string;
  public description!: string;
  public created_at!: string;
  public updated_at!: string;
  public deleted_at!: string;

  constructor(
    id: number,
    categoryId: number,
    name: string,
    description: string,
    created_at: string,
    updated_at: string,
    deleted_at: string
  ) {
    super();
    this.id = id;
    categoryId;
    this.name = name;
    this.description = description;
    this.created_at = created_at;
    this.updated_at = updated_at;
    this.deleted_at = deleted_at;
  }
}

export default Subcategory;
