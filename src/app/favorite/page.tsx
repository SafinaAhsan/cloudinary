import cloudinary from "cloudinary"
import { SearchResult } from "../gallery/page";
import ForceRefresh from "../components/force-refresh";
import FavoriteList from "./favorite-lists";

const FavoritePage = async () => {
    const results = (await cloudinary.v2.search
        .expression("resource_type:image AND tags=favorite")
        .sort_by("created_at", "desc")
        .max_results(30)
        .with_field("tags")
        .execute()) as { resources: SearchResult[] }
    return (
        <section>
            <ForceRefresh />
            <div className="px-6 sm:px-0 flex flex-col gap-8">
                <div className="flex justify-between">
                    <h1 className="text-2xl sm:text-4xl font-bold">FAVORITE IMAGES</h1>
                </div>
               
                <FavoriteList initialResources={results.resources} />
                
            </div>
        </section>
    )
}

export default FavoritePage