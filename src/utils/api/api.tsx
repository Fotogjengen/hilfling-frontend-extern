import axios from "axios";
import { Interface } from "readline";

const API_BASE_URL = "http://localhost:8080/api/v1"; //process.env.BASE_URL;
const HEADERS = {
  Accept: "application/json",
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*"
};

export const api = axios.create({
  baseURL: API_BASE_URL,
  headers: HEADERS
});

export async function getTest(): Promise<string> {
  return api
    .get("/")
    .then(res => res.data["test"])
    .catch(e => console.error(e));
}

export class baseApi<T> {
  baseUrl: string;
  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }
  getAll(): Promise<any> {
    return api.get(this.baseUrl);
  }
  getById(id: number): Promise<any> {
    return api.get(this.baseUrl + id);
  }
  update(object: T): Promise<any> {
    return api.put(this.baseUrl, object);
  }
  create(object: T): Promise<any> {
    return api.post(this.baseUrl, object);
  }
}
