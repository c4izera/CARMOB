import axios from 'axios';

const API_URL = 'http://10.81.205.9:5000/api/catalog';

export const getProducts = (page = 1) => axios.get(`${API_URL}?page=${page}`);
export const createProduct = (product) => axios.post(API_URL, product);
export const updateProduct = (id, updates) => axios.patch(`${API_URL}/${id}`, updates);
export const deleteProduct = (id) => axios.delete(`${API_URL}/${id}`);