import axios from "axios";

const API_URL = process.env.API_URL

export const createHeaders = () => {
  const headers = {
    'accept': 'application/json',
    'Content-Type': 'application/json'
  }
  return headers;
}

export const getProducts = async () => {
  try {
    const headers = createHeaders();
    // headers['Authorization'] = `Bearer ${token}`;
    const url = `${API_URL}/products`;
    const { data } = await axios.get(url, { headers });
    return data;
  } catch (error) {
    console.error('getProducts:', error);
    return error;
  }
}