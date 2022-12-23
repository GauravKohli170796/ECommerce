import { AppConst } from "../constants/AppConst";
import { axiosInstance } from "./axiosInstance";

export const getAllProducts = async(page:string) => {
   return await axiosInstance.get(`api/v1/product/${AppConst.productsPerPage}/${parseInt(page)-1}`);  
};

export const getProductById = async (id: string) => {
   return await axiosInstance.get(`api/v1/product/${id}`); 
}