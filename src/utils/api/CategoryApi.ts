import { api } from "./api";
import { Category } from "../../interfaces/Category";

interface PaginatedResult<T> {
  config: object;
  headers: object;
  request: any;
  status: number;
  statusText: string;
  data: {
    currentList: T[];
    limit: number;
    offset: number;
    pageSize: number;
    totalPages: number;
    totalRecords: number;
  };
}

export const CategoryApi = {
  getAll: async function (): Promise<PaginatedResult<Category>> {
    return api.get("/categories");
  },
};
