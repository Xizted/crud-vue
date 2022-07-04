import { Products } from '../interface/product.interface';

const total = (arr: Products, field: 'cantidad' | 'costo') =>
  arr.reduce((pv, cv) => pv + cv[field], 0)!;

export default total;
