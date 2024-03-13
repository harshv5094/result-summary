import type { Metadata } from 'next'
import { Hanken_Grotesk } from 'next/font/google'
import './globals.css'
import React from 'react'

const hanken_grotesk = Hanken_Grotesk({
  subsets: ['latin'],
  weight: ['500', '700', '800']
})

export const metadata: Metadata = {
  title: 'Result Summary',
  description: 'A frontend mentor app challenge'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="favicon-32x32.png" />
      </head>
      <body className={`${hanken_grotesk.className} bg-paleBlue `}>
        {children}
      </body>
    </html>
  )
}
