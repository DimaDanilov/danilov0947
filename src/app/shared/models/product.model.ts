export interface Product {
    name: string;
    article: string;
    price: number;
    brand: string;
    category: string;
    weight: number;
    amount: number;
    id?: number;
}

export enum MyCategoryProduct {
    furniture,
    technics,
    books,
    phones,
}