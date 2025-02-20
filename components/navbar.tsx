"use client"
import Link from "next/link"
import { useTheme } from "next-themes"
import { Sun, Moon } from "lucide-react"
import { useEffect, useState } from "react"

export default function Navbar() {
  const { theme, setTheme } = useTheme()
  const [hasMounted, setHasMounted] = useState(false)

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }
  useEffect(() => {
    setHasMounted(true)
  }, [])

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <span className="font-bold">
            <span className="text-red-700">Scam</span>Phobia
          </span>
        </Link>
        <nav className="flex flex-1 items-center space-x-6 text-sm font-medium">
          <Link href="/about" className="transition-colors hover:text-primary">
            About
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <button onClick={toggleTheme} className="flex items-center justify-center p-2">
            {hasMounted && theme === "light" ? (
              <Moon className="h-5 w-5 text-primary" />
            ) : (
              <Sun className="h-5 w-5 text-primary" />
            )}
          </button>
          <Link href={"/audits"}>
            Reports
          </Link>
        </div>
      </div>
    </header>
  )
}

