import axios from 'axios';

const API = axios.create({
  baseURL: 'https://your-bagisto-domain.com',
});

export interface LoginResponse {
  token: string;
}

export const login = async (email: string, password: string) => {
  const { data } = await API.post<LoginResponse>('/api/v1/customer/login', {
    email,
    password,
  });
  return data;
};

export const register = async (form: FormData) => {
  const { data } = await API.post('/api/v1/customer/register', form, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
  return data;
};

export const forgotPassword = async (email: string) => {
  const { data } = await API.post('/api/v1/customer/forgot-password', {
    email,
  });
  return data;
};

export default API;
