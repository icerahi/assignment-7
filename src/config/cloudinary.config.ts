// fontend -> formdata with image file -> multer -> Form Data -> Req (Body+File)
// our pc folder image -> form data -> File -> Store in temporary folder of project -> Req.file
//Req.file -> cloudinary(req.file) -> url-> store in database

import { v2 as cloudinary } from "cloudinary";
import { env } from "./env";

cloudinary.config({
  cloud_name: env.CLOUDINARY_CLOUD_NAME,
  api_key: env.CLOUDINARY_API_KEY,
  api_secret: env.CLOUDINARY_API_SECRET,
});

export const cloudinaryUpload = cloudinary;
// const uploadToCloudinary= cloudinary.uploader.uploader(file,options)

// our pc folder image -> form data -> File -> Store in temporary folder of project -> Req.file -> package(req.file)
// -> url-> -> req.file -> store in database
