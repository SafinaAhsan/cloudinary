import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from '@/components/ui/button'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}
function SideMenu(){
  return( <div className="pb-12 w-1/5">
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            Manage
          </h2>
          <div className="space-y-1">
            <Button variant="secondary" className="w-full justify-start flex gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24"
             fill="none" 
             stroke="currentColor"
              stroke-width="2" 
              stroke-linecap="round"
               stroke-linejoin="round" 
               className="lucide lucide-images"><path d="M18 22H4a2 2 0 0 1-2-2V6"/><path d="m22 13-1.296-1.296a2.41 2.41 0 0 0-3.408 0L11 18"/><circle cx="12" cy="8" r="2"/><rect width="16" height="16" x="6" y="2" rx="2"/></svg>
              Gallery
            </Button>
            <Button variant="ghost" className="w-full justify-start  flex gap-2">
            <svg xmlns="http://www.w3.org/2000/svg"
             width="24"
              height="24" 
              viewBox="0 0 24 24"
               fill="none"
                stroke="currentColor" 
                stroke-width="2"
                 stroke-linecap="round"
                  stroke-linejoin="round"
                   className="lucide lucide-album">
                    <rect width="18" height="18" x="3" y="3" rx="2" ry="2"/>
                    <polyline points="11 3 11 11 14 8 17 11 17 3"/>
                    </svg>
              Album
            </Button>
            <Button variant="ghost" className="w-full justify-start  flex gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24"
             viewBox="0 0 24 24"
              fill="none" 
              stroke="currentColor"
               stroke-width="2" 
               stroke-linecap="round"
                stroke-linejoin="round"
                 className="lucide lucide-heart">
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
            </svg>
              Favorites
            </Button>
          </div>
        </div>
      </div>
      </div>
  )
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='dark'>
      <body className={inter.className}>
      <div className="border-b">
          <div className="flex h-16 items-center px-4 container mx-auto">
            PHOTOSAPP
            <div className="ml-auto flex items-center space-x-4">
            <Avatar>
  <AvatarImage src="https://github.com/shadcn.png" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>

            </div>
          </div>
          </div>
          <div className='flex'>
        <SideMenu/>
          <div className='w-full px-4 pt-12'> {children}</div>
          </div>
       </body>
    </html>
  )
}
