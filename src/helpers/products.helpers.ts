import { Products } from '../interface/product.interface';

export const deleteProductHelper = (arr: Products, id: number) =>
  arr.filter((product) => product.id !== id);
