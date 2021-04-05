import axios from "axios";

const API_URL = process.env.API_URL

export const createHeaders = () => {
  const headers = {
    'accept': 'application/json',
    'Content-Type': 'application/json'
  }
  return headers;
}

export const addContact = async (names, email, phone, message, agree) => {
  try {
    const headers = createHeaders();
    // headers['Authorization'] = `Bearer ${token}`;
    const url = `${API_URL}/contacts`;
    const response = await axios.post(url, {
      names: names.toUpperCase(),
      email: email.toLowerCase(),
      phone,
      message,
      agree
    }, { headers });
    return response;
  } catch (error) {
    console.error('addContact:', error);
    return error;
  }
}