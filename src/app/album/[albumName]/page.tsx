import ForceRefresh from "@/app/components/force-refresh"
import CloudinaryImage from "@/app/components/shared/cloudinary-image"
import ImageGrid from "@/app/components/shared/image-grid"
import cloudinary from "cloudinary"
export type SearchResult={
    public_id:string
    tags:string[]
}
const AlbumPage = async ({params:{albumName}}:{
  params:{albumName:string}
})=> {
    const results= (await cloudinary.v2.search
    .expression(`resource_type:image AND folder=${albumName}`)
    .sort_by("created_at","desc")
    .max_results(30)
    .with_field("tags")
    .execute()) as{resources: SearchResult[]}
  
    
  return (
    <section>
    <ForceRefresh/>
    <div className="flex flex-col gap-8">
        <div className="flex justify-between">
        <h1 className="text-4xl font-bold">Album {albumName}</h1>
    
        </div>
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

export default AlbumPage