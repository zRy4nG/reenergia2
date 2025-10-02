'use client';

import React, { useState } from 'react';
import { Leaf, Menu, X } from 'lucide-react';
import Image from 'next/image';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <Image src="https://i.imgur.com/Maty9KK.png" alt="Logo" width={40} height={40} />
            <span className="text-xl font-bold text-[#1B5E20]">
              ReEnergia
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a 
              href="#home" 
              className="text-[#555555] hover:text-[#4CAF50] font-medium transition-colors duration-300"
            >
              Home
            </a>
            <a 
              href="/about" 
              className="text-[#555555] hover:text-[#4CAF50] font-medium transition-colors duration-300"
            >
              Sobre
            </a>
            <button className="bg-[#4CAF50] hover:bg-[#1B5E20] text-white px-6 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105">
              Login
            </button>
          </div>

          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-[#555555] hover:text-[#4CAF50] transition-colors duration-300"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        <div className={`md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen 
            ? 'max-h-48 opacity-100 pb-4' 
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="flex flex-col gap-4 pt-4 border-t border-gray-100">
            <a 
              href="#home" 
              className="text-[#555555] hover:text-[#4CAF50] font-medium transition-colors duration-300 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>
            <a 
              href="#sobre" 
              className="text-[#555555] hover:text-[#4CAF50] font-medium transition-colors duration-300 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Sobre
            </a>
            <button 
              className="bg-[#4CAF50] hover:bg-[#1B5E20] text-white px-6 py-2 rounded-lg font-medium transition-all duration-300 w-fit"
              onClick={() => setIsMenuOpen(false)}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;