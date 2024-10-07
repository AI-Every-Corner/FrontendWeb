import axios from 'axios';
const API_URL = 'http://localhost:8080/api';
export const login = async (username, password) => {
  const response = await axios.post(`${API_URL}/auth/login`, { username, password });
  return response.data;
};
export const logout = async () => {
  // 如果後端需要一個登出 API
  // await axios.post(`${API_URL}/auth/logout`);
  // 清除本地存儲的用戶信息
  localStorage.removeItem('token');
  localStorage.removeItem('userId');
  localStorage.removeItem('userImage');
};