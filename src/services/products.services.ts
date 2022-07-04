import api from '../config/axios';
import { Product, Products } from '../interface/product.interface';

export const getProduts = async () => {
  const { data } = await api.get<Products>('/');

  return data;
};

export const getProduct = async (id: string) => {
  const { data } = await api.get<Product>(`/${id}`);

  return data;
};

export const addProduct = async (data: Product) => {
  await api.post('/', data);
};

export const deleteProduct = async (id: number) => {
  await api.delete(`/${id}`);
};

export const editProduct = async (id: number,data: Product) => {
  await api.put(`/${id}`, data);
};
