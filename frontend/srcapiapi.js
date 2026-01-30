import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

export const login = (data) => axios.post(`${API_URL}/auth/login`, data);
export const register = (data) => axios.post(`${API_URL}/auth/register`, data);
export const sendChat = (data) => axios.post(`${API_URL}/chat/ask`, data);
export const getStats = () => axios.get(`${API_URL}/dashboard/stats`);
