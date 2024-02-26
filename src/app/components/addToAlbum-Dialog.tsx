"use client"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogFooter,
  } from "@/components/ui/dialog"
import Folder from "./icons/folder"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { SearchResult } from "../gallery/page"
import AddImageToAlbum from "./actions"
  

const AddToAlbumDialog = ({image,onClose}:{image:SearchResult,onClose:()=>void}) => {
    const [albumName , setAlbumName]=useState("")
    const[open,setOpen]=useState(false)
  return (
    <div><Dialog open={open} 
    onOpenChange={(newOpenState)=>{
      setOpen(newOpenState)
      if(!newOpenState){
      onClose()
      }  }}>
    <DialogTrigger className="flex gap-2">
    <Folder />
        Add To Album
    </DialogTrigger>
    <DialogContent className="sm:max-w-[375px]">
      <DialogHeader>
        <DialogTitle>Add To Album</DialogTitle>
        <DialogDescription>
         Type an album you want to move this image into
        </DialogDescription>
      </DialogHeader>
      <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
           Album
            </Label>
            <Input
            onChange={(e)=>{setAlbumName(e.currentTarget.value)}}
              id="albumName"
              defaultValue={albumName}
              className="col-span-2"
            />
          </div>
      
        <DialogFooter>
          <Button 
          onClick={async ()=>{
            onClose()
            setOpen(false)
            await AddImageToAlbum(image,albumName)
          }}
          type="submit">Add to Album</Button>
        </DialogFooter>
    </DialogContent>
  </Dialog>
  </div>
  )
}

export default AddToAlbumDialog