import * as React from "react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Folders } from "@/app/album/page"
import Link from "next/link"

export function AlbumCard({folders}:{folders:Folders}) {
  return (
    <Card >
      <CardHeader>
        <CardTitle>{folders.name}</CardTitle>
        <CardDescription>All your {folders.name} images
 </CardDescription>
      </CardHeader>
      <CardContent>
         </CardContent>
      <CardFooter className="flex justify-between">
      <Button asChild>
            <Link href={`/album/${folders.name}`}>
                View Album
            </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
