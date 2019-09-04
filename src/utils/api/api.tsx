import axios from "axios";

const API_BASE_URL = "http://www.mocky.io/v2/5d701f983100003ed3660abe";

const HEADERS = {
  Accept: "application/json",
  "Content-Type": "application/json"
};

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: HEADERS
});

export async function getTest(): Promise<string> {
  return api
    .get("/")
    .then(res => res.data["test"])
    .catch(e => console.error(e));
}
