import { SearchResult } from "@/app/gallery/page"
import { ReactNode } from "react"

const MAxColumn = 4
const ImageGrid = ({ images, getImage }: {
  images: SearchResult[],
  getImage: (imageData: SearchResult) => ReactNode
}) => {

  function getColumns(colIndex: number) {
    return images.filter((resources, idx) => idx % MAxColumn == colIndex)
  }
  return (
    <div className=" mt-3 sm:mt-0 sm:grid grid-cols-4 gap-4">
      {[
        getColumns(0),
        getColumns(1),
        getColumns(2),
        getColumns(3),
      ].map((column, idx) => (
        <div
          key={idx} className="flex flex-col gap-4 mb-4 sm:mb-0">
          {column.map(getImage)}

        </div>
      )
      )}
    </div>
  )
}

export default ImageGrid
