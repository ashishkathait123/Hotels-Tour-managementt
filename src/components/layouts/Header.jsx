// import { textStyle } from '@/config/typography'
import { textStyle } from '../../config/typography'
import { Menu, X, ChevronDown, User, Heart, Search, Globe } from 'lucide-react'
import { useState } from 'react'
// import { TertiaryHeader } from './TertiaryHeader'
export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [userDropdownOpen, setUserDropdownOpen] = useState(false)

  const navLinks = [
    { name: 'Destinations', submenu: true },
    { name: 'Deals', submenu: true },
    { name: 'Experiences', submenu: false },
    { name: 'Luxury Escapes+', submenu: false },
    { name: 'Travel Styles', submenu: true },
  ]

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      

      {/* Main Navigation */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center">
              <span className={`${textStyle('h4')} text-primary`}>Hotels&Tour</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                <button className={`${textStyle('body.base', 'text-neutral-1 hover:text-primary flex items-center')}`}>
                  {link.name}
                  {link.submenu && <ChevronDown className="ml-1 h-4 w-4" />}
                </button>
                {link.submenu && (
                  <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-1 hidden group-hover:block">
                    {/* Submenu items would go here */}
                    <a href="#" className="block px-4 py-2 text-neutral-1 hover:bg-neutral-6">Submenu Item</a>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right Side Controls */}
          <div className="flex items-center space-x-4">
            <button className="p-2 text-neutral-2 hover:text-primary">
              <Search className="h-5 w-5" />
            </button>
            <button className="p-2 text-neutral-2 hover:text-primary">
              <Heart className="h-5 w-5" />
            </button>
            <button className="p-2 text-neutral-2 hover:text-primary">
              <Globe className="h-5 w-5" />
            </button>
            
            {/* User Dropdown */}
            <div className="relative">
              <button 
                onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                className="flex items-center space-x-1 p-2 text-neutral-2 hover:text-primary"
              >
                <User className="h-5 w-5" />
                <span className="hidden md:inline">Sign In</span>
              </button>
              
              {userDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                  <a href="#" className="block px-4 py-2 text-neutral-1 hover:bg-neutral-6">Sign In</a>
                  <a href="#" className="block px-4 py-2 text-neutral-1 hover:bg-neutral-6">Register</a>
                </div>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 text-neutral-2 hover:text-primary"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-neutral-5">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href="#"
                className="block px-3 py-2 rounded-md text-base font-medium text-neutral-1 hover:bg-neutral-6"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 border-t border-neutral-5">
              <a href="#" className="block px-3 py-2 text-neutral-1 hover:bg-neutral-6">Sign In</a>
              <a href="#" className="block px-3 py-2 text-neutral-1 hover:bg-neutral-6">Register</a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}