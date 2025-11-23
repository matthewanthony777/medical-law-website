'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ThemeToggle } from './theme-toggle'
import { HomeIcon, FileTextIcon, LayersIcon, PersonIcon, ChatBubbleIcon, HamburgerMenuIcon, Cross1Icon } from '@radix-ui/react-icons'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-black/75 backdrop-blur-sm border-b border-white/5">
      <nav className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo/Brand */}
          <div className="flex items-center space-x-8">
            <Link
              href="/"
              className="font-serif text-2xl font-bold text-white transition-all duration-300 hover:text-accent-blue hover:scale-105"
            >
              TT
            </Link>

            {/* Desktop Navigation - Enhanced with better spacing and hover effects */}
            <ul className="hidden md:flex items-center gap-8 lg:gap-10 text-sm font-light text-gray-300">
              <li className="group">
                <Link
                  href="/"
                  className="flex items-center gap-2 py-2 transition-all duration-300 hover:text-white hover:translate-x-1"
                >
                  <HomeIcon className="h-4 w-4 transition-colors duration-300 group-hover:text-accent-blue" />
                  <span>Home</span>
                </Link>
              </li>
              <li className="group">
                <Link
                  href="/future-insights"
                  className="flex items-center gap-2 py-2 transition-all duration-300 hover:text-white hover:translate-x-1"
                >
                  <FileTextIcon className="h-4 w-4 transition-colors duration-300 group-hover:text-accent-purple" />
                  <span>Future-Insights</span>
                </Link>
              </li>
              <li className="group">
                <Link
                  href="/projects"
                  className="flex items-center gap-2 py-2 transition-all duration-300 hover:text-white hover:translate-x-1"
                >
                  <LayersIcon className="h-4 w-4 transition-colors duration-300 group-hover:text-accent-teal" />
                  <span>Projects</span>
                </Link>
              </li>
              <li className="group">
                <Link
                  href="/expertise"
                  className="flex items-center gap-2 py-2 transition-all duration-300 hover:text-white hover:translate-x-1"
                >
                  <PersonIcon className="h-4 w-4 transition-colors duration-300 group-hover:text-accent-cyan" />
                  <span>Expertise</span>
                </Link>
              </li>
              <li className="group">
                <Link
                  href="/collaborate"
                  className="flex items-center gap-2 py-2 transition-all duration-300 hover:text-white hover:translate-x-1"
                >
                  <ChatBubbleIcon className="h-4 w-4 transition-colors duration-300 group-hover:text-accent-blue" />
                  <span>Collaborate</span>
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex items-center gap-3">
            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Mobile Menu Button - Enhanced touch target (44px minimum) */}
            <button
              className="md:hidden text-white p-3 rounded-lg hover:bg-white/10 active:bg-white/20 transition-all duration-300 touch-target"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <Cross1Icon className="h-6 w-6" />
              ) : (
                <HamburgerMenuIcon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu - Enhanced with animation and better touch targets */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            mobileMenuOpen ? 'max-h-96 opacity-100 mt-6' : 'max-h-0 opacity-0'
          }`}
        >
          <ul className="flex flex-col space-y-2 pb-4">
            <li className="group">
              <Link
                href="/"
                className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-300 transition-all duration-300 hover:text-white hover:bg-white/10 active:bg-white/20 border border-transparent hover:border-accent-blue/30"
                onClick={() => setMobileMenuOpen(false)}
              >
                <HomeIcon className="h-5 w-5 transition-colors duration-300 group-hover:text-accent-blue" />
                <span className="text-base">Home</span>
              </Link>
            </li>
            <li className="group">
              <Link
                href="/future-insights"
                className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-300 transition-all duration-300 hover:text-white hover:bg-white/10 active:bg-white/20 border border-transparent hover:border-accent-purple/30"
                onClick={() => setMobileMenuOpen(false)}
              >
                <FileTextIcon className="h-5 w-5 transition-colors duration-300 group-hover:text-accent-purple" />
                <span className="text-base">Future-Insights</span>
              </Link>
            </li>
            <li className="group">
              <Link
                href="/projects"
                className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-300 transition-all duration-300 hover:text-white hover:bg-white/10 active:bg-white/20 border border-transparent hover:border-accent-teal/30"
                onClick={() => setMobileMenuOpen(false)}
              >
                <LayersIcon className="h-5 w-5 transition-colors duration-300 group-hover:text-accent-teal" />
                <span className="text-base">Projects</span>
              </Link>
            </li>
            <li className="group">
              <Link
                href="/expertise"
                className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-300 transition-all duration-300 hover:text-white hover:bg-white/10 active:bg-white/20 border border-transparent hover:border-accent-cyan/30"
                onClick={() => setMobileMenuOpen(false)}
              >
                <PersonIcon className="h-5 w-5 transition-colors duration-300 group-hover:text-accent-cyan" />
                <span className="text-base">Expertise</span>
              </Link>
            </li>
            <li className="group">
              <Link
                href="/collaborate"
                className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-300 transition-all duration-300 hover:text-white hover:bg-white/10 active:bg-white/20 border border-transparent hover:border-accent-blue/30"
                onClick={() => setMobileMenuOpen(false)}
              >
                <ChatBubbleIcon className="h-5 w-5 transition-colors duration-300 group-hover:text-accent-blue" />
                <span className="text-base">Collaborate</span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}