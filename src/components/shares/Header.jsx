import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="flex items-center justify-between mx-6 md:mx-14 py-4 text-white relative">
      <div className="flex items-center space-x-4">
        {/* Hamburger Icon for Small Screens */}
        <div className="cursor-pointer md:hidden" onClick={toggleMenu}>
          <FontAwesomeIcon icon={faBars} />
        </div>
        {/* Logo */}
        <div className="relative w-9 h-9">
          <div className="absolute w-[22.5px] h-[22.5px] overflow-hidden top-[0.01px] left-[19.82px] bg-[#9d4edd] rotate-[44deg] origin-top-left rounded-[1.61px]" />
          <div className="absolute w-[22.5px] h-[22.5px] overflow-hidden top-[11.9px] left-0 border-[2.4px] border-[#040404] box-border z-10 bg-[#9d4edd] rounded-[1.61px] m-0" />
        </div>
        <a className="text-lg font-semibold">Pingoware</a>
      </div>
      {/* Navigation Links for Medium and Large Screens */}
      <nav className="hidden md:flex space-x-6">
        <Link className="hover:text-gray-400" to="/">Home</Link>
        <a className="hover:text-gray-400" href="#about-us">About Us</a>
        <Link className="hover:text-gray-400" to="/project-page">Work</Link>
        <Link className="hover:text-gray-400" to="/project-page">Services</Link>
        <a className="hover:text-gray-400" href="#about-us">Contact</a>
      </nav>
      {/* Get Started Button for Medium and Large Screens */}
      <button className="py-2 px-4 bg-white hover:bg-gray-400 text-black rounded-3xl hidden md:block">
        <a className="font-semibold">Get Started</a>
      </button>

      {/* Mobile Menu Drawer */}
      <div className={`fixed top-0 left-0 h-full w-64 bg-gray-800 z-50 transform ${menuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}>
        <div className="flex flex-col p-6 space-y-4">
          <button className="text-white" onClick={toggleMenu}>Close</button>
          <Link className="hover:text-gray-400" to="/" onClick={toggleMenu}>Home</Link>
          <a className="hover:text-gray-400" href="#about-us" onClick={toggleMenu}>About Us</a>
          <Link className="hover:text-gray-400" to="/project-page" onClick={toggleMenu}>Work</Link>
          <Link className="hover:text-gray-400" to="/project-page" onClick={toggleMenu}>Services</Link>
          <a className="hover:text-gray-400" href="#about-us" onClick={toggleMenu}>Contact</a>
        </div>
      </div>
    </header>
  );
}

export default Header;
