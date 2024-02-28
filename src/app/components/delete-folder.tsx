"use server"
import cloudinary from "cloudinary"

export default async function Deletefolder(folderName:string){
    const images=await cloudinary.v2.api.resources({
        type:"upload",
        prefix:`${folderName}`
    })
    for (const image of images.resources){
        await cloudinary.v2.uploader.destroy(image.public_id)
    }
    await cloudinary.v2.api.delete_folder(folderName)
}