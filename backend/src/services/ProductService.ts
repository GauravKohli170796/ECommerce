import {Inject, Injectable} from "@tsed/di";
import {MongooseModel} from "@tsed/mongoose";
import { IAddProductRequest } from "../interfaces/productInterface";
import {ProductModel} from "../models/ProductModel";

@Injectable()
export class ProductService {
    constructor(@Inject(ProductModel) private  productModel: MongooseModel<ProductModel>){}

    async getAllProducts():Promise<ProductModel[]>{
        return await this.productModel.find();
    }

    async addProduct(product:IAddProductRequest):Promise<any> {  
       // const productObject = new ProductModel({...product});
       
      return  await this.productModel.create(product);
        
    }

}
