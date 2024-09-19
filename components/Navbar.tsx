// Navbar.js
"use client"

import React, { useEffect, useState } from 'react';

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const section = document.querySelector('#home');
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0 }
    );

    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  return (
    <nav className={`fixed top-6 left-1/2 transform -translate-x-1/2 w-auto bg-green-100 bg-opacity-80 border-b-2 border-[#86efac] rounded-b-lg shadow-lg z-50 transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <div className="container mx-auto flex items-center justify-center p-4">
        <ul className="flex space-x-4">
          <li><a href="#home" className="text-[#86efac] hover:text-green-600">Home</a></li>
          <li><a href="#about" className="text-[#86efac] hover:text-green-600">About</a></li>
          <li><a href="#projects" className="text-[#86efac] hover:text-green-600">Projects</a></li>
          <li><a href="#skills" className="text-[#86efac] hover:text-green-600">Skills</a></li>
          <li><a href="#contact" className="text-[#86efac] hover:text-green-600">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
