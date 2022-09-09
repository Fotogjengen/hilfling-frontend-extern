import { api } from "./api";
import { CategoryDto } from "../../../generated";
import { PaginatedResult } from "./types";
import { DeletedResult } from "./AlbumApi";

export const CategoryApi = {
  getAll: async function (): Promise<PaginatedResult<CategoryDto>> {
    return api.get("/categories");
  },
  deleteById: async function (id: string): Promise<DeletedResult> {
    return api.delete(`/categories/${id}`);
  },
};
