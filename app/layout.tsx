import React from "react"
import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _inter = Inter({ subsets: ["latin"] });
const _playfair = Playfair_Display({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Zimgro Consultancy | Language Services & International Business Solutions',
  description: 'Zimgro Consultancy offers professional Chinese, French, Portuguese, and German language services, travel & tours, HSK courses, and international business solutions.',
  generator: 'v0.app',
  icons: {
    icon: '/favicon.ico', // your Zimgro logo in public/
    apple: '/apple-icon.png', // optional for Apple devices
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
