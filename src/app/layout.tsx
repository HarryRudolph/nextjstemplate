import type { Metadata } from 'next'
// import { Inter } from 'next/font/google'
import './globals.css'

import { MainNav } from "@/components/main-nav"
import { Footer } from "@/components/footer"

// const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'NextJSTemplate',
  description: 'NextJSTemplate',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
      </head>
      <body >
        <div className="border-b flex h-16 items-center px-4">
          <MainNav />
        </div>
        {children}
        <Footer />
      </body>





    </html>
  )
}
