import { Inject, Injectable } from "@tsed/di";
import { MongooseModel } from "@tsed/mongoose";
import { date } from "@tsed/schema";
import { IAddProductRequest, IUpdateProductRequest } from "../interfaces/productInterface";
import { ProductModel } from "../models/ProductModel";

@Injectable()
export class ProductService {
  constructor(@Inject(ProductModel) private productModel: MongooseModel<ProductModel>) { }

  // This api will return latest created products for UI latest section and 
  // all products in pagination fashion

  async getAllProducts(limit: number, page: number): Promise<ProductModel[]> {
    return await this.productModel.aggregate([
      {
        $facet: {
          latestProduct: [{ $sort: { createdAt: -1 } }, { $limit: 10 }],
          allProducts: [{ $skip: (limit * page) }, { $limit: limit }],
          totalProducts: [
            {
              $count: 'totalProducts'
            }
          ]
        }
      }
    ]);
  }

  async addProduct(product: IAddProductRequest): Promise<any> {
    return await this.productModel.create(product);
  }

  async updateProduct(id: string, product: IUpdateProductRequest): Promise<any> {
    return await this.productModel.updateOne({ id: id }, { $set: { ...product, updatedAt: new Date() } });
  }

  async deleteProduct(id: string): Promise<any> {
    return await this.productModel.deleteOne({ id: id });
  }
}
