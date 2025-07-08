"use client"

import { Button } from "@/components/ui/button"
import { Menu, X, Calendar, ArrowRight } from "lucide-react"
import { useState } from "react"
import Image from "next/image"

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Activities", href: "#activities" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3 bg-transparent">
            <div className="w-16 h-16 rounded-full p-1 overflow-hidden bg-transparent">
              <Image
                src="/images/siotics-logo.png"
                alt="SIOTICS Logo"
                width={64}
                height={64}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors duration-200 hover:bg-white/10 rounded-md"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* Get Notified Button */}
          <div className="hidden md:block">
            <Button
              size="sm"
              className="bg-blue-600 hover:bg-blue-700 text-white group shadow-lg shadow-blue-600/25"
            >
              <Calendar className="mr-2 h-4 w-4" />
              Get Notified
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white hover:bg-white/10"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-black/40 backdrop-blur-md rounded-lg mt-2 border border-white/10">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium transition-colors duration-200 hover:bg-white/10 rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-2">
                <Button
                  size="sm"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white transition-all duration-300 group"
                >
                  <Calendar className="mr-2 h-4 w-4" />
                  Get Notified
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
