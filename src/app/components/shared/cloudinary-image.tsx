"use client"
import { CldImage, CldImageProps } from "next-cloudinary"
import Heart from "../icons/heart"
import { setAsFavoriteAction } from "@/app/gallery/actions"
import { useState, useTransition } from "react"
import { SearchResult } from "@/app/gallery/page"
import FullHeart from "../icons/full-heart"
import ImageMenu from "./image-menu"

const CloudinaryImage = (props:
    {
        imageData: SearchResult
        onUnheart?: (unheartedResource: SearchResult) => void
        [key: string]: any
    } & Omit<CldImageProps, "src">
) => {

    const [transition, startTransition] = useTransition()
    const { imageData, onUnheart } = props
    const [isFavorited, setIsFavorited] = useState(imageData.tags.includes("favorite"))
    return (
        <div className="relative max-md:max-w-[300px] max-md:mx-auto">
            <CldImage {...props}
                src={imageData.public_id
                } /> {
                isFavorited ? (
                    <FullHeart
                        onClick={() => {
                            onUnheart?.(imageData)
                            setIsFavorited(false)
                            startTransition(() => {
                                setAsFavoriteAction(imageData.public_id, false)
                            })
                        }}
                        className="absolute top-2 left-2 hover:text-white text-red-500 cursor-pointer" />

                ) : (
                    <Heart
                        onClick={() => {
                            setIsFavorited(true)
                            startTransition(() => {
                                setAsFavoriteAction(imageData.public_id, true)
                            })
                        }}
                        className="absolute top-2 left-2 hover:text-red-500 cursor-pointer" />
                )
            }
            <ImageMenu image={
                imageData
            } />
        </div>
    )
}

export default CloudinaryImage