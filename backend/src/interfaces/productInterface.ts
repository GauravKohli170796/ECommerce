export interface IAddProductRequest{
    name: string;
    description: string;
    price: number;
    category:string;
    quantity: number;
    images?: string[];
    discount?: number;
    productDetails: any;
}
export interface IUpdateProductRequest{
    name?: string;
    description?: string;
    price?: number;
    category?:string;
    quantity?: number;
    images?: string[];
    discount?: number;
    productDetails?: any;
}