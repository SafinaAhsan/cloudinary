"use client"
import { Button } from "@/components/ui/button";
import { log } from "console";
import { CldUploadButton } from "next-cloudinary";
import { useRouter } from "next/navigation";
import { setTimeout } from "timers/promises";



export const UploadButton = () => {
  const router=useRouter()
  const handleUpload=()=>{
    router.refresh()
  }
   return (
    <div>
        <Button asChild>
           
          <CldUploadButton 
      onUpload={ handleUpload  }
      uploadPreset="jvqejkno" >
        <div className="flex gap-2 items-center mb-2 sm:mb-0">
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
        UPLOAD
        </div>
        </CldUploadButton>
      </Button>
    </div>
  )
}
