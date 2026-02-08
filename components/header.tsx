"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { href: "#mission", label: "Our Mission" },
  { href: "#event", label: "Event Details" },
  { href: "#speaker", label: "Guest Speaker" },
  { href: "/register", label: "Register" },
  { href: "#team", label: "Our Team" },
  { href: "/about", label: "About" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  // Helper function to get the correct href
  // If we're not on home page and link is a hash, prepend "/"
  const getHref = (href: string) => {
    if (href.startsWith("#") && pathname !== "/") {
      return `/${href}`
    }
    return href
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#F8F4EC]/95 backdrop-blur-sm border-b border-[#E5DED3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/PublicAffairsConference-2.png"
              alt="Principia College"
              width={80}
              height={80}
              className="h-10 w-auto md:h-12 object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={getHref(link.href)}
                className="text-[#3D3D3D] hover:text-[#788668] transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-[#3D3D3D]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="md:hidden bg-[#F8F4EC] border-b border-[#E5DED3] py-4">
          <div className="max-w-7xl mx-auto px-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={getHref(link.href)}
                className="text-[#3D3D3D] hover:text-[#788668] transition-colors font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  )
}
