"use client"

import { CldImage } from 'next-cloudinary';
import { useState } from 'react';
import { UploadButton } from './components/shared/page';


export default function Home() {
  const [imageId,setImageId]=useState("")
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <UploadButton/>

 {imageId &&(
<CldImage
  width="400"
  height="300"
  src={imageId}
  sizes="100vw"
  alt="Description of my image"
/>)}
    </main>
  )
}