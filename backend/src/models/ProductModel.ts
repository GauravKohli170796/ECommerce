import {Property,Required,Default} from "@tsed/schema";
import {Model, ObjectID} from "@tsed/mongoose";
import { DefaultDeserializer } from "v8";

@Model()
export class ProductModel {
  @ObjectID("id")
  _id: string;
  
  @Property()
  @Required()
  name: string;

  @Property()
  @Required()
  description: string;

  @Property()
  @Required()
  price: number;

  @Property()
  @Required()
  catergory: string; //it need to changed in future , make it enum here

  @Property()
  @Required()
  quantity: number;

  @Property()
  @Default(new Date)
  createdAt: Date;

  @Property()
  @Default(new Date)
  updatedAt: Date;

  @Property()
  Images: String[];

}
