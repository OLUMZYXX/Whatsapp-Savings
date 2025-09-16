'use client'

import React, { useState } from 'react'
import Link from 'next/link'

export default function Navbar() {
  // Smooth scroll to Use Cases section
  const handleUseCasesClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const el = document.getElementById('usecases')
    if (el) {
      e.preventDefault()
      el.scrollIntoView({ behavior: 'smooth' })
      setIsMobileMenuOpen(false)
    }
  }
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <nav className='w-full bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100 sticky top-0 z-50'>
      <div className='max-w-[1200px] mx-auto flex items-center justify-between px-6 py-4'>
        {/* Logo */}
        <Link
          href='/'
          className='text-2xl font-bold text-blue-600 hover:text-blue-700 transition-colors duration-200'
        >
          SavingsHub
        </Link>

        {/* Desktop Navigation Links */}
        <div className='hidden md:flex items-center space-x-8'>
          <Link
            href='#usecases'
            className='text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 relative group'
            onClick={handleUseCasesClick}
          >
            Use Cases
            <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-200 group-hover:w-full'></span>
          </Link>
          <Link
            href='/dashboard'
            className='text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 relative group'
          >
            Dashboard
            <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-200 group-hover:w-full'></span>
          </Link>
          <Link
            href='/groups'
            className='text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 relative group'
          >
            Features
            <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-200 group-hover:w-full'></span>
          </Link>
          <Link
            href='#faq'
            className='text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 relative group'
          >
            FAQ
            <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-200 group-hover:w-full'></span>
          </Link>
        </div>

        {/* Desktop Auth buttons */}
        <div className='hidden md:flex items-center space-x-4'>
          <Link
            href='/login'
            className='text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 px-4 py-2 rounded-lg hover:bg-blue-50'
          >
            Login
          </Link>
          <Link
            href='/signup'
            className='bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2 rounded-lg font-medium hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-105'
          >
            Sign Up
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className='md:hidden flex flex-col items-center justify-center w-8 h-8 space-y-1 group'
          aria-label='Toggle mobile menu'
        >
          <span
            className={`w-6 h-0.5 bg-gray-700 transition-all duration-300 ${
              isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''
            }`}
          ></span>
          <span
            className={`w-6 h-0.5 bg-gray-700 transition-all duration-300 ${
              isMobileMenuOpen ? 'opacity-0' : ''
            }`}
          ></span>
          <span
            className={`w-6 h-0.5 bg-gray-700 transition-all duration-300 ${
              isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
            }`}
          ></span>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden bg-white border-t border-gray-100 transition-all duration-300 ease-in-out ${
          isMobileMenuOpen
            ? 'max-h-64 opacity-100'
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <div className='px-6 py-4 space-y-4'>
          <Link
            href='#usecases'
            className='block text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 py-2'
            onClick={handleUseCasesClick}
          >
            Use Cases
          </Link>
          <Link
            href='/dashboard'
            className='block text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 py-2'
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Dashboard
          </Link>
          <Link
            href='/groups'
            className='block text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 py-2'
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Features
          </Link>
          <Link
            href='#faq'
            className='block text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 py-2'
            onClick={() => setIsMobileMenuOpen(false)}
          >
            FAQ
          </Link>
          <hr className='border-gray-200' />
          <Link
            href='/login'
            className='block text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 py-2'
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Login
          </Link>
          <Link
            href='/signup'
            className='block bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-lg font-medium hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-md text-center'
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  )
}
