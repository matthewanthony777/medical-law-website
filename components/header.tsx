'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ThemeToggle } from './theme-toggle'
import { HomeIcon, FileTextIcon, PersonIcon, ChatBubbleIcon, HamburgerMenuIcon, Cross1Icon } from '@radix-ui/react-icons'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-black/75 backdrop-blur-sm">
      <nav className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo/Brand */}
          <div className="flex items-center space-x-8">
            <Link href="/" className="font-serif text-2xl font-bold text-white">
              TT
            </Link>
            
            {/* Desktop Navigation */}
            <ul className="hidden md:flex items-center gap-10 text-sm font-light text-gray-300">
              <li className="transition-colors hover:text-white flex items-center">
                <HomeIcon className="mr-2 h-4 w-4" />
                <Link href="/">Home</Link>
              </li>
              <li className="transition-colors hover:text-white flex items-center">
                <FileTextIcon className="mr-2 h-4 w-4" />
                <Link href="/future-insights">Future-Insights</Link>
              </li>
              <li className="transition-colors hover:text-white flex items-center">
                <PersonIcon className="mr-2 h-4 w-4" />
                <Link href="/expertise">Expertise</Link>
              </li>
              <li className="transition-colors hover:text-white flex items-center">
                <ChatBubbleIcon className="mr-2 h-4 w-4" />
                <Link href="/collaborate">Collaborate</Link>
              </li>
            </ul>
          </div>

          <div className="flex items-center gap-4">
            {/* Theme Toggle */}
            <ThemeToggle />
            
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-white p-2 rounded-md hover:bg-white/10 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <Cross1Icon className="h-6 w-6" />
              ) : (
                <HamburgerMenuIcon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <ul className="flex flex-col space-y-4 text-gray-300">
              <li className="transition-colors hover:text-white px-3 py-2 rounded-md hover:bg-white/10">
                <Link href="/" className="flex items-center" onClick={() => setMobileMenuOpen(false)}>
                  <HomeIcon className="mr-2 h-4 w-4" />
                  <span>Home</span>
                </Link>
              </li>
              <li className="transition-colors hover:text-white px-3 py-2 rounded-md hover:bg-white/10">
                <Link href="/future-insights" className="flex items-center" onClick={() => setMobileMenuOpen(false)}>
                  <FileTextIcon className="mr-2 h-4 w-4" />
                  <span>Future-Insights</span>
                </Link>
              </li>
              <li className="transition-colors hover:text-white px-3 py-2 rounded-md hover:bg-white/10">
                <Link href="/expertise" className="flex items-center" onClick={() => setMobileMenuOpen(false)}>
                  <PersonIcon className="mr-2 h-4 w-4" />
                  <span>Our Expertise</span>
                </Link>
              </li>
              <li className="transition-colors hover:text-white px-3 py-2 rounded-md hover:bg-white/10">
                <Link href="/collaborate" className="flex items-center" onClick={() => setMobileMenuOpen(false)}>
                  <ChatBubbleIcon className="mr-2 h-4 w-4" />
                  <span>Collaborate</span>
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  )
}