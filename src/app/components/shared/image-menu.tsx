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
import { Button } from "@/components/ui/button"

const ImageMenu = ({image}:{image:SearchResult}) => {
  const[open,setOpen]=useState(false)
  return (
    <div className="absolute top-2 right-2 z-50">
      <DropdownMenu open={open} onOpenChange={setOpen}>
    <DropdownMenuTrigger className="z-50" >
    <Menu/>
    </DropdownMenuTrigger>
    <DropdownMenuContent>
      <DropdownMenuItem asChild >
        <AddToAlbumDialog
        image={image}  onClose={()=>setOpen(false)}/>
        </DropdownMenuItem>
        <DropdownMenuItem asChild >
          <Button
          className="cursor-pointer flex justify-start pl-4"
          asChild variant="ghost">
      <Link 
      
      href={`/edit?publicId=${encodeURIComponent(image.public_id)}`}>
        <Edit className="mr-2 w-4 h-4"/>Edit</Link>
        </Button>
        </DropdownMenuItem>
   </DropdownMenuContent>
  </DropdownMenu></div>
  )
}

export default ImageMenu
  