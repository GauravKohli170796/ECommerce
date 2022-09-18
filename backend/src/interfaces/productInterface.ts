export interface IAddProductRequest{
    name: string;
    description: string;
    price: number;
    catergory:string;
    quantity: number;
    images?: string[];
}

export interface IAddProductResponse{
    
}