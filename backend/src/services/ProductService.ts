import { Inject, Injectable } from "@tsed/di";
import { MongooseModel } from "@tsed/mongoose";
import { IAddProductRequest, IUpdateProductRequest } from "../interfaces/productInterface";
import { ProductModel } from "../models/ProductModel";

@Injectable()
export class ProductService {
  constructor(@Inject(ProductModel) private productModel: MongooseModel<ProductModel>) { }

  // This api will return latest created products for UI latest section and 
  // all products in pagination fashion

  async getAllProducts(limit: number, page: number): Promise<ProductModel[]> {

    const response = await this.productModel.aggregate([
      {
        $facet: {
          latestProduct: [
            { $sort: { createdAt: -1 } },
            { $limit: 10 },
            { $project: { name: 1, description: 1, images: 1, discount: 1 ,price:1} }
          ],
          allProducts: [
            { $skip: (limit * page) },
            { $limit: limit },
            { $project: { name: 1, description: 1, images: 1, discount: 1 ,price:1} }
          ],
          totalProducts: [
            {
              $count: 'totalProducts'
            }
          ]
        }
      }
    ]);
    return response[0];
  }

  async getProductById(id: string): Promise<unknown>{
    return await this.productModel.findById(id);
  }

  async addProduct(product: IAddProductRequest): Promise<unknown> {
    return await this.productModel.create(product);
  }

  async updateProduct(id: string, product: IUpdateProductRequest): Promise<unknown> {
    return await this.productModel.updateOne({ id: id }, { $set: { ...product, updatedAt: new Date() } });
  }

  async deleteProduct(id: string): Promise<unknown> {
    return await this.productModel.deleteOne({ id: id });
  }
}
