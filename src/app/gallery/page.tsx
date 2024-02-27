import ForceRefresh from "../components/force-refresh"
import CloudinaryImage from "../components/shared/cloudinary-image"
import ImageGrid from "../components/shared/image-grid"
import { UploadButton } from "../components/shared/upload-button"
import cloudinary from "cloudinary"
import SearchForm from "./search-form"
export type SearchResult={
    public_id:string
    tags:string[]
}
const GalleryPage = async ({searchParams:{search}}:{searchParams:{search:string}})=> {
    const results= (await cloudinary.v2.search
    .expression(`resource_type:image${search ? ` AND tags=${search}`:""}`)
    .sort_by("created_at","desc")
    .max_results(30)
    .with_field("tags")
    .execute()) as{resources: SearchResult[]}
    console.log(results);
  
    
  return (
    <section>
    <ForceRefresh/>
    <div className="flex flex-col gap-8">
        <div className="flex justify-between">
        <h1 className="text-4xl font-bold">GALLERY</h1>
        <UploadButton/>
        </div>
        <SearchForm/>
<ImageGrid images={results.resources}
getImage={(imageData:SearchResult)=>{
  return(<CloudinaryImage
    key={imageData.public_id}  
    imageData={imageData}
    width="300"
    height="400"
    alt="an image of something"/>)
}}/>
  </div>
    </section>
  )
}

export default GalleryPage