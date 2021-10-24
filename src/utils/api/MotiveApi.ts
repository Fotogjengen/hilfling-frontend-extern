import { api } from "./api";
import { MotiveDto } from "../../../generated";
import { PaginatedResult } from "./types";

export const MotiveApi = {
  getAll: async function (): Promise<PaginatedResult<MotiveDto>> {
    return api.get("/motives");
  },
};
