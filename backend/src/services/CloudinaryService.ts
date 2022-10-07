import { PlatformMulterFile } from "@tsed/common";
import { Injectable } from "@tsed/di";
import { v2 as cloudinary} from 'cloudinary';
const DatauriParser = require('datauri/parser');
const parser = new DatauriParser();
import path from 'path';


@Injectable()
export class CloudinaryService {

    constructor() {
        cloudinary.config({ 
            cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
            api_key: process.env.CLOUDINARY_API_KEY, 
            api_secret: process.env.CLOUDINARY_API_SECRET,
            secure:true
        });
    }

    public async uploadResource(resource: PlatformMulterFile[]): Promise<any>{
        try {
           const filePath= parser.format(path.extname(resource[0].originalname).toString(), resource[0].buffer);
            let x = await cloudinary.uploader.upload(filePath.content, {
                folder:"Test"
            });
            console.log(x);
            return x;
            
        }
        catch (errr) {
            console.log(errr.message);
            return errr;
            
        }
    }



}
