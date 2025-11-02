import axios from "axios";

const API_URL = "http://ec2-13-50-15-142.eu-north-1.compute.amazonaws.com:30083/back1/auth";

export const login = async (username, password) => {
  const response = await axios.post(`${API_URL}/login`, { username, password });
  localStorage.setItem("token", response.data);
  return response.data;
};

export const signup = async (username, email, password) => {
  try {
    const response = await axios.post(`${API_URL}/signup`, { username, email, password });
    return response.data;
  } catch (error) {
    console.error("Signup failed:", error.response?.data || error.message);
    throw error;
  }
};

export const logout = () => {
  localStorage.removeItem("token");
};
