import { api, baseApi } from "./api";
import { Position } from "../../interfaces/Position";
const baseUrl = "/positions/";

class PositionApiClass extends baseApi<Position> {
  constructor(baseUrl: string) {
    super(baseUrl);
  }
}
export const PositionApiObject = new PositionApiClass(baseUrl);
// export const PhotoGangBangerApi = {
//   getAll: async function(): Promise<any> {
//     return api.get(baseUrl);
//   },
//   getById: function(id: number): Promise<any> {
//     return api.get(baseUrl + id);
//   },
//   update: function(position: Position): Promise<any> {
//     return api.post(baseUrl, position);
//   }
// };
