import axios from "axios";
const API_URL = "http://ec2-16-16-80-131.eu-north-1.compute.amazonaws.com:30083/auth";

export const addToCart = async (userId, productId) => {
  return await axios.post(`${CART_API_URL}/add`, {
    userId,
    productId,
    quantity: 1,
  });
};

export const getCartItems = async (userId) => {
  const response = await axios.get(`${CART_API_URL}/user/${userId}`);
  return response.data;
};

export const clearCart = async (userId) => {
  return await axios.delete(`${CART_API_URL}/clear/${userId}`);
};

export const removeCartItem = async (cartItemId) => {
  try {
    await axios.delete(`${CART_API_URL}/remove/${cartItemId}`);
  } catch (error) {
    console.error("Error removing item from cart", error);
  }
};
