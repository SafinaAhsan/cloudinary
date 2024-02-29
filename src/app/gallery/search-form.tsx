"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

export default function SearchForm({ initialSearch }: { initialSearch: string }) {
    const [tagName, setTagName] = useState(initialSearch ?? "")
    const router = useRouter()

    useEffect(() => {
        setTagName(initialSearch)
    }, [initialSearch])
    return (
        <form
            onSubmit={(e) => {
                e.preventDefault()
                router.replace(`/gallery?search=${encodeURIComponent(tagName)}`)
                router.refresh()

            }}
            className="mt-4 ">
            <Label htmlFor="tag-name" className="text-right sm:text-lg sm:mr-4">
                Search By Tag
            </Label>
            <div className="flex items-center gap-2 ">
                <Input
                    onChange={(e) => { setTagName(e.currentTarget.value) }}
                    id="albumName"
                    defaultValue={tagName}
                    className="w-28  sm:w-full mt-2 sm:mt-0 h-6 sm:h-10 "
                />
                <Button className="w-16 sm:w-20 h-6 sm:h-10" type="submit">Search</Button>
            </div>
        </form>
    )
}