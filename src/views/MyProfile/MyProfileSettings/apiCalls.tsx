import { PhotoGangBangerApi } from "../../../utils/api/PhotoGangBangerApi";
import { PositionApiObject } from "../../../utils/api/PositionApi";
export const apiCalls = {
  getData: async (setState: any) => {
    const users = await PhotoGangBangerApi.getAll();
    const positions = await PositionApiObject.getAll();

    return setState(users.data[0], positions.data);
  }
};
