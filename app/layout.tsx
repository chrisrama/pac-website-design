import type React from "react"
import type { Metadata } from "next"
import { Libre_Baskerville, DM_Sans } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { getAssetPath } from "@/lib/utils"
import "./globals.css"

const _libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-serif",
})

const _dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
})

export const metadata: Metadata = {
  title: "Journeys of Hope | Understanding Immigration",
  description:
    "A Public Awareness Campaign educating, raising awareness, and fostering dialogue about immigrants' right to pursue safety, freedom, and opportunity. April 3-4 at Principia College.",
  generator: "v0.app",
  icons: {
    icon: getAssetPath("/favicon.png"),
    apple: getAssetPath("/favicon.png"),
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
