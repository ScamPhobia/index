import "./globals.css"
import Navbar from "@/components/navbar"
import { Inter } from "next/font/google"
import type React from "react"
import type { Metadata } from "next"
import MouseMoveEffect from "@/components/mouse-move-effect"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Anonymous Crypto Auditors",
  description: "Check with us before taking financial action!",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-background text-foreground antialiased`}>
      <Navbar />
        <MouseMoveEffect />
        {children}
      <Footer />
      </body>
    </html>
  )
}

