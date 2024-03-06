"use client"
import { CldImage } from "next-cloudinary"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export default function EditPage({
    searchParams: { publicId } }: {
        searchParams: {
            publicId: string
        }
    }) {
    const [transformation, setTransformation] = useState<undefined | "crop" | "blur" |"grayscale"|"pixelate" |"removeBackground">()
    return (
        <section>
            <div className="flex flex-col gap-8">
                <div className="flex justify-between">
                    <h1 className="text-4xl font-bold">EDIT</h1>
                </div>
                <div className="flex gap-4">
                <Button variant="ghost" onClick={() => setTransformation(undefined)}>Clear All</Button>
                <Button onClick={() => setTransformation("crop")}>Crop</Button>
                <Button  onClick={() => setTransformation("blur")}>Apply Blur</Button>
                <Button  onClick={() => setTransformation("grayscale")}>Convert To Gray</Button>
                <Button  onClick={() => setTransformation("pixelate")}>pixelate</Button>
                <Button  onClick={() => setTransformation("removeBackground")}>Remove Background</Button>
                </div>
                <div className="grid grid-cols-2 gap-12 ">
                    <CldImage
                        src={publicId}
                        width="300"
                        height="400"
                        alt="an image of something"
                    />
                    {transformation === "crop" &&
                        (<CldImage
                            src={publicId}
                            style={{ width: "auto", height: "auto" }}
                            width="300"
                            height="400"
                            alt="an image of something"
                            crop="thumb"
                           
                        />
                        )}
                          {transformation === "blur" &&
                        (<CldImage
                            src={publicId}
                            width="300"
                            height="400"
                            alt="an image of something"
                           blur="800"
                        />
                        )}
                           {transformation === "grayscale" &&
                        (<CldImage
                            src={publicId}
                            width="300"
                            height="400"
                            alt="an image of something"
                        grayscale
                        />
                        )}
                        {transformation === "pixelate" &&
                        (<CldImage
                            src={publicId}
                            width="300"
                            height="400"
                            alt="an image of something"
                   pixelate
                        />
                        )}
                         {transformation === "removeBackground" &&
                        (<CldImage
                            src={publicId}
                            width="300"
                            height="400"
                            alt="an image of something"
          removeBackground
                        />
                        )}
                </div>
            </div>
        </section>)
}