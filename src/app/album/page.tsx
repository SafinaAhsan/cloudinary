import ForceRefresh from "../components/force-refresh"
import cloudinary from "cloudinary"
import { AlbumCard } from "../components/shared/album-card"

export type Folders={
    name:string, path:string
}
const Album = async ()=> {
  const {folders}= (await cloudinary.v2.api.root_folders() ) as {
    folders:Folders[]
  }
     return (
    <section>
    <ForceRefresh/>
    <div className="px-6 sm:px-0 flex flex-col gap-8">
        <div className="flex justify-between">
        <h1 className="text-4xl font-bold">ALBUMS</h1>
        </div>
        <div className="sm:grid grid-cols-3 sm:gap-4">
        {folders.map((folder)=>
        <div 
        key={folder.path}
        className="mb-4 sm:mb-0"><AlbumCard 
      
        folders={folder}
        /></div>)}
      </div>
        </div>
    </section>
  )
}

export default Album