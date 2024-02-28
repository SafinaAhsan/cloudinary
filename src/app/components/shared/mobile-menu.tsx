"use client"
import { Button } from "@/components/ui/button"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import Link from "next/link"
import Heart from "../icons/heart"
import { useState } from "react"
  
export default function MobileMenu(props:any){
  const[isOpen,setisOpen]= useState(false)
  const onPressLink=()=>{
    setisOpen(false)
  }
    return(
<Sheet open={isOpen} onOpenChange={(open)=>{setisOpen(open)}}>
  <SheetTrigger className="px-4"><Menu/></SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>
      <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            Manage
          </h2>
          <div className="space-y-1">
           <Button asChild
            variant="ghost"
             className="w-full justify-start flex gap-2">
            <Link onClick={onPressLink} href="/gallery">
            <svg xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24"
             fill="none" 
             stroke="currentColor"
              stroke-width="2" 
              stroke-linecap="round"
               stroke-linejoin="round" 
               className="lucide lucide-images"><path d="M18 22H4a2 2 0 0 1-2-2V6"/><path d="m22 13-1.296-1.296a2.41 2.41 0 0 0-3.408 0L11 18"/><circle cx="12" cy="8" r="2"/><rect width="16" height="16" x="6" y="2" rx="2"/></svg>
              Gallery
              </Link>
            </Button>
            <Link
            onClick={onPressLink}
             href="/album">
            <Button variant="ghost" className="w-full justify-start flex gap-2 ">
           
            <svg xmlns="http://www.w3.org/2000/svg"
             width="24"
              height="24" 
              viewBox="0 0 24 24"
               fill="none"
                stroke="currentColor" 
                stroke-width="2"
                 stroke-linecap="round"
                  stroke-linejoin="round"
                   className="lucide lucide-album">
                    <rect width="18" height="18" x="3" y="3" rx="2" ry="2"/>
                    <polyline points="11 3 11 11 14 8 17 11 17 3"/>
                    </svg>
              Album
              
            </Button>
            </Link>
            <Button asChild
            variant="ghost"
             className="w-full justify-start  flex gap-2">
              <Link
              onClick={onPressLink}
               href="/favorite">
           <Heart/>
              Favorites
              </Link>
            </Button>
            </div>
      </SheetTitle>
    </SheetHeader>
  </SheetContent>
</Sheet>

)
}