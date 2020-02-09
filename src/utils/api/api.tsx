import axios from 'axios';

const API_BASE_URL = '/api/v1';

const HEADERS = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*'
};

export const api = axios.create({
  baseURL: API_BASE_URL,
  headers: HEADERS
});

export async function getTest(): Promise<string> {
  return api
    .get('/')
    .then(res => res.data['test'])
    .catch(e => console.error(e));
}
