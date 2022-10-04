import { Controller, Inject } from "@tsed/di";
import { BodyParams, PathParams } from "@tsed/platform-params";
import { Delete, Description, Get, Post, Put, Required, Returns, security } from "@tsed/schema";
import { ProductService } from "../../services/ProductService";
import { CloudinaryService} from "../../services/CloudinaryService";
import { IAddProductRequest } from "../../interfaces/productInterface";
import {MultipartFile, PlatformMulterFile} from "@tsed/common";
import { ProductModel } from "src/models/ProductModel";

@Controller("")
export class ProductController {
  constructor(@Inject(ProductService) private productService: ProductService,
              @Inject(CloudinaryService) private cloudinaryService:CloudinaryService) { }
  @Get("/:limit/:page")
  @Description("Return a list of products")
  get(@PathParams("limit") limit: string,@PathParams("page") page: string) {
    return this.productService.getAllProducts(parseInt(limit),parseInt(page));
  }

  @Post("/addProduct")
  addProduct(@BodyParams() @Required() product: IAddProductRequest) {
    return this.productService.addProduct(product);
  }

  @Post("/uploadFile")
  uploadFile(@MultipartFile("images") images: PlatformMulterFile[]) {
    return this.cloudinaryService.uploadResource(images);
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
