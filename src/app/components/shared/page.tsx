"use client"
import { Button } from "@/components/ui/button";
import { CldUploadButton } from "next-cloudinary";
import { useState } from "react";


export const UploadButton = () => {
    const [imageId,setImageId]=useState("")
  return (
    <div>
        <Button asChild>
            <div className="flex gap-2">
        <svg xmlns="http://www.w3.org/2000/svg"
         width="24" 
         height="24"
          viewBox="0 0 24 24" 
          fill="none"
           stroke="currentColor"
            stroke-width="2"
             stroke-linecap="round" 
             stroke-linejoin="round" 
             className="lucide lucide-upload">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="17 8 12 3 7 8"/>
        <line x1="12" x2="12" y1="3" y2="15"/>
        </svg>
          <CldUploadButton 
      onUpload={(result:any)=>{
        setImageId(result.info.public_id);
        
      }}
      uploadPreset="jvqejkno" />
      </div>
      </Button>
    </div>
  )
}
