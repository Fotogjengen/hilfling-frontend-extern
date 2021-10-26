import { api } from "./api";
import { PlaceDto } from "../../../generated";
import { PaginatedResult } from "./types";

export const PlaceApi = {
    getAll: async function (): Promise<PaginatedResult<PlaceDto>> {
        return api.get("/places");
    },
};
