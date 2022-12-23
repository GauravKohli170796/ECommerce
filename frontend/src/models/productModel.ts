export interface IAllProduct{
    _id: string;
    name: string;
    description: string;
    price: number;
    images?: string[];
    discount: number
}