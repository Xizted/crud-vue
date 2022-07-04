export interface Product {
    id? : number;
    descripcion: string;
    cantidad: number;
    costo: number;
}

export type Products = Product[];