// src/services/orders.ts
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://your-api-gateway-url.amazonaws.com/dev',
});

export const fetchOrders = async () => {
  try {
    const response = await api.get('/orders');
    return response.data;
  } catch (error) {
    console.error('Error fetching orders', error);
    throw error;
  }
};
