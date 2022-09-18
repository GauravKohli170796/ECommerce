import {Controller,Inject} from "@tsed/di";
import { BodyParams } from "@tsed/platform-params";
import {Get, Post,Required} from "@tsed/schema";
import { ProductService } from "../../services/ProductService"
import { IAddProductRequest } from "../../interfaces/productInterface"

/* roters 
  1:getproductsbyId
  2:getallproducts
  3:updateproduct
  4:deleteproduct

*/

@Controller("")
export class ProductController {
  constructor(@Inject(ProductService) private  productService:ProductService){}
  @Get("/")
  get() {
    return this.productService.getAllProducts();
  }

  @Post("/addProduct")
  addProduct(@BodyParams() @Required() product:IAddProductRequest){
    return this.productService.addProduct(product);
  }

}
