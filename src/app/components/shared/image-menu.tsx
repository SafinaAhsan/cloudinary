import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import Menu from "../icons/menu"
import AddToAlbumDialog from "../addToAlbum-Dialog"
import { SearchResult } from "@/app/gallery/page"
import { useState } from "react"
import Link from "next/link"
import { Edit } from "lucide-react"

const ImageMenu = ({image}:{image:SearchResult}) => {
  const[open,setOpen]=useState(false)
  return (
    <div className="absolute top-2 right-2">
      <DropdownMenu open={open} onOpenChange={setOpen}>
    <DropdownMenuTrigger >
    <Menu/>
    </DropdownMenuTrigger>
    <DropdownMenuContent>
      <DropdownMenuItem asChild >
        <AddToAlbumDialog
        image={image}  onClose={()=>setOpen(false)}/>
        </DropdownMenuItem>
        <DropdownMenuItem asChild  className="gap-2">
      <Link href={`/edit?publicId=${encodeURIComponent(image.public_id)}`}>
        <Edit className="mr-4 w-4 h-6"/>Edit</Link>
        </DropdownMenuItem>
   </DropdownMenuContent>
  </DropdownMenu></div>
  )
}

export default ImageMenu
  