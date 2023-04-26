import { Category } from "./category";

export interface Subcategory {
  id: number;
  categoryId: number;
  name: string;
  description: string;
  created_at: string;
  updated_at: string;
  deleted_at: string;
}
