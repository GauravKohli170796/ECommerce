import { Controller, Inject } from "@tsed/di";
import { BodyParams, PathParams } from "@tsed/platform-params";
import { Delete, Get, Post, Put, Required } from "@tsed/schema";
import { ProductService } from "../../services/ProductService"
import { IAddProductRequest } from "../../interfaces/productInterface"

@Controller("")
export class ProductController {
  constructor(@Inject(ProductService) private productService: ProductService) { }
  @Get("/:limit/:page")
  get(@PathParams("limit") limit: string,@PathParams("page") page: string) {
    return this.productService.getAllProducts(parseInt(limit),parseInt(page));
  }

  @Post("/addProduct")
  addProduct(@BodyParams() @Required() product: IAddProductRequest) {
    return this.productService.addProduct(product);
  }

  @Put("/updateProduct/:id")
  updateProduct(@PathParams("id") id: string, @BodyParams() @Required() product: IAddProductRequest) {
    return this.productService.updateProduct(id, product);
  }

  @Delete("/deleteProduct/:id")
  deleteProduct(@PathParams("id") id: string) {
    return this.productService.deleteProduct(id);
  }

}
