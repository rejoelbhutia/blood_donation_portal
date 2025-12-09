import React, { useState } from 'react';
import { Droplet, Menu, LogIn, X } from 'lucide-react';
import { Link } from 'react-router-dom'






const NavLink = ({ href, children }) => (
  <li>
    <a 
      href={href} 
      className="text-gray-700 hover:text-red-600 font-medium transition-colors duration-300 py-2 block md:py-0"
    >
      {children}
    </a>
  </li>
);


export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 font-inter">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Droplet className="w-7 h-7 text-red-600 fill-current" />
          <span className="text-2xl font-bold text-gray-900">BloodDonate</span>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <ul className="flex items-center space-x-6">
            <NavLink href="#">Home</NavLink>
            <NavLink href="#">About Us</NavLink>
            <NavLink href="#">Eligibility</NavLink>
          </ul>
         
        </div>
        <div className="buttons">
           <div className="flex items-center space-x-4">
            <Link
              to="/authPage"
              className="flex items-center px-4 py-2 bg-white text-red-600 border border-red-600 font-semibold rounded-lg hover:bg-red-50 transition duration-300"
            >
              <LogIn className="w-5 h-5 mr-2" />
              <span>Login</span>
            </Link>
            
          </div>
        </div>
      </nav>

      {/* Mobile Menu (Dropdown) */}
      <div
        className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'} px-4 pb-6 border-t border-gray-200`}
      >
        <ul className="flex flex-col space-y-4 pt-4">
          <NavLink href="#">Home</NavLink>
          <NavLink href="#">About Us</NavLink>
          <NavLink href="#">Eligibility</NavLink>
          <NavLink href="#">Find a Drive</NavLink>
        </ul>
        <div className="flex flex-col space-y-4 mt-6 pt-4 border-t border-gray-100">
          <a
            href="#"
            className="flex items-center justify-center px-4 py-3 bg-white text-red-600 border border-red-600 font-semibold rounded-lg hover:bg-red-50 transition duration-300"
          >
            <LogIn className="w-5 h-5 mr-2" />
            <span>Login</span>
          </a>
         
        </div>
      </div>
    </header>
  );
}
