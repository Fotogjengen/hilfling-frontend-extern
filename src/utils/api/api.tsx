import axios from "axios";

const API_BASE_URL = "http://localhost:8080/api/v1"; //process.env.BASE_URL;
const HEADERS = {
  Accept: "application/json",
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
};

export const api = axios.create({
  baseURL: API_BASE_URL,
  headers: HEADERS,
});

export async function getTest(): Promise<unknown> {
  return api
    .get("/")
    .then((res) => res.data[""])
    .catch((e) => console.error(e));
}