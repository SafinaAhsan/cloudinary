"use client"
import CloudinaryImage from "../components/shared/cloudinary-image"
import ImageGrid from "../components/shared/image-grid";
import { SearchResult } from "../gallery/page";
import { useState } from "react";

const FavoriteList = ({ initialResources }: { initialResources: SearchResult[] }) => {
    const [resources, setResources] = useState(initialResources)
    return (
        <ImageGrid images={resources}
        getImage={(imageData:SearchResult)=>{
            return(
                <CloudinaryImage
                key={imageData.public_id}
                imageData={imageData}
                width="300"
                height="400"
                alt="an image of something"
                onUnheart={(unheartedResource) => {
                    setResources((currentResources) =>
                        currentResources.filter(
                            (resource) => resource.public_id !== unheartedResource.public_id
                        )
                    )
                }}
            />
            )
        }}/>
      
               
            )}


    

export default FavoriteList