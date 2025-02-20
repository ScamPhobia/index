"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Github, Twitter, Youtube, Heart } from "lucide-react";
import { ExternalLink } from "lucide-react";


export default function Footer() {

  const pathname = usePathname();

  return (
    <footer className="border-t">
      <div className="container flex flex-col gap-8 py-8 md:flex-row md:py-12">
        <div className="flex-1 space-y-4">
          <h2 className="font-bold">ScamPhobia</h2>
          <p className="text-sm text-muted-foreground">

            <Link
              href="https://substack.com/@scamphobia/"
              target="_blank"
              className="text-muted-foreground transition-colors hover:text-primary"
              rel="noopener noreferrer"
            >
              <span className="inline-flex items-center space-x-2">
                Newsletter <ExternalLink className="h-4 w-4 ml-2" />
              </span>
            </Link>


          </p>
        </div>
        <div className="grid flex-1 grid-cols-2 gap-12 sm:grid-cols-3">
          <div className="space-y-4">
            {/* <h3 className="text-sm font-medium">Solutions</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/ai-analytics" className="text-muted-foreground transition-colors hover:text-primary">
                  AI Analytics
                </Link>
              </li>
              <li>
                <Link href="/cloud-services" className="text-muted-foreground transition-colors hover:text-primary">
                  Cloud Services
                </Link>
              </li>
            </ul> */}
          </div>
          <div className="space-y-4">
            {/* <h3 className="text-sm font-medium">Organization</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/about" className="text-muted-foreground transition-colors hover:text-primary">
                  About Us
                </Link>
              </li>
            </ul> */}
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-medium">Connect</h3>
            <div className="flex space-x-4">
              <Link
                href="https://github.com/ScamPhobia"
                target="_blank"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="https://x.com/ScamPhobia"
                target="_blank"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="https://www.youtube.com/@ScamPhobia"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                <Youtube className="h-5 w-5" />
                <span className="sr-only">Youtube</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="container border-t py-6 flex justify-center">
        {pathname !== "/about" && (
          <Link href={"/about"}>
            {/* ONLY SHOW THIS IF THE PAGE IS NOT ABOUT */}
            <span className="inline-flex items-center">
              <p className="text-sm text-muted-foreground">Support our cause</p>
              <Heart className="ml-2" />
            </span>
          </Link>
        )}
      </div>
    </footer>
  )
}

