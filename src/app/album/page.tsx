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
    <div className="flex flex-col gap-8">
        <div className="flex justify-between">
        <h1 className="text-4xl font-bold">ALBUMS</h1>
        </div>
        <div className="grid grid-cols-3 gap-4">
        {folders.map((folder)=><AlbumCard 
        key={folder.path}
        folders={folder}/>)}
      </div>
        </div>
    </section>
  )
}

export default Album