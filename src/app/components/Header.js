'use client'
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeButton, setActiveButton] = useState('home');

  const toggleServicesDropdown = () => {
    setIsServicesOpen(!isServicesOpen);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleButtonClick = (button) => {
    setActiveButton(button);
    setIsMenuOpen(false); // Close menu after clicking a link on mobile
  };

  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <div className="container mx-auto max-w-5xl flex items-center justify-between px-4 py-3"> {/* Adjusted width */}
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/">
            <img src="/herosection/logo.png" alt="Logo" className="w-24" /> {/* Reduced logo size */}
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="block lg:hidden text-gray-800 hover:text-gray-600 focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        {/* Sidebar Menu for Mobile */}
        <div
          className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          } lg:hidden`}
        >
          <button
            onClick={toggleMenu}
            className="text-gray-800 hover:text-gray-600 focus:outline-none absolute top-4 right-4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Navigation Items */}
          <nav className="mt-16 space-y-6">
            <Link href="/" onClick={() => handleButtonClick('home')}>
              <span className={`block px-6 py-2 font-semibold ${activeButton === 'home' ? 'text-blue-600' : 'text-black'}`}>
                Home
              </span>
            </Link>
            <Link href="/pages/aboutus" onClick={() => handleButtonClick('aboutus')}>
              <span className="block px-6 py-2 text-black font-semibold">About Us</span>
            </Link>
            <div className="px-6 py-2">
              <button
                onClick={toggleServicesDropdown}
                className="w-full text-left text-black font-semibold flex justify-between items-center"
              >
                What We Do <span className="ml-1">&#x25BE;</span>
              </button>
              {isServicesOpen && (
                <div className="mt-2 bg-gray-50 rounded-lg shadow-inner p-2 space-y-1">
                  <Link href="/pages/webdevelopment" onClick={toggleMenu}>
                    <span className="block text-gray-800 px-4 py-2 rounded hover:bg-blue-500 hover:text-white transition duration-150">
                      Web Development
                    </span>
                  </Link>
                  <Link href="/pages/seo" onClick={toggleMenu}>
                    <span className="block text-gray-800 px-4 py-2 rounded hover:bg-blue-500 hover:text-white transition duration-150">
                      SEO
                    </span>
                  </Link>
                  <Link href="/pages/Digital_marketing" onClick={toggleMenu}>
                    <span className="block text-gray-800 px-4 py-2 rounded hover:bg-blue-500 hover:text-white transition duration-150">
                      Digital Marketing
                    </span>
                  </Link>
                  <Link href="/pages/graphic-designing" onClick={toggleMenu}>
                    <span className="block text-gray-800 px-4 py-2 rounded hover:bg-blue-500 hover:text-white transition duration-150">
                      UX/UI Design
                    </span>
                  </Link>
                  <Link href="/pages/video_editing" onClick={toggleMenu}>
                    <span className="block text-gray-800 px-4 py-2 rounded hover:bg-blue-500 hover:text-white transition duration-150">
                      Video Editing
                    </span>
                  </Link>
                  <Link href="/pages/content_writing" onClick={toggleMenu}>
                    <span className="block text-gray-800 px-4 py-2 rounded hover:bg-blue-500 hover:text-white transition duration-150">
                      Content Writing
                    </span>
                  </Link>
                </div>
              )}
            </div>
            <Link href="/pages/blog" onClick={() => handleButtonClick('blog')}>
              <span className="block px-6 py-2 text-black font-semibold">Blog</span>
            </Link>
            <Link href="/pages/contactus" onClick={() => handleButtonClick('contactus')}>
              <span className="block px-6 py-2 text-black font-semibold">Contact Us</span>
            </Link>
            {/* WhichHosting button */}
            <Link
              href="/pages/which_hosting"
              className="block px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white font-bold text-center rounded-full"
            >
              WhichHosting?
            </Link>
          </nav>
        </div>

        {/* Navigation for Desktop */}
        <nav className="hidden lg:flex items-center space-x-8">
          <Link href="/" onClick={() => handleButtonClick('home')}>
            <span className={`font-semibold ${activeButton === 'home' ? 'text-blue-600' : 'text-black'}`}>
              Home
            </span>
          </Link>
          <Link href="/pages/aboutus" onClick={() => handleButtonClick('aboutus')}>
            <span className="text-black font-semibold">About Us</span>
          </Link>
          <div className="relative">
            <button
              onClick={toggleServicesDropdown}
              className="text-black hover:text-blue-600 font-semibold flex items-center"
            >
              What We Do <span className="ml-1">&#x25BE;</span>
            </button>
            {isServicesOpen && (
              <div className="absolute mt-2 w-48 z-40 bg-white border border-gray-200 shadow-lg">
                <Link href="/pages/webdevelopment" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                  Web Development
                </Link>
                <Link href="/pages/seo" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                  SEO
                </Link>
                <Link href="/pages/Digital_marketing" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                  Digital Marketing
                </Link>
                <Link href="/pages/graphic-designing" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                  UX/UI Design
                </Link>
                <Link href="/pages/video_editing" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                  Video Editing
                </Link>
                <Link href="/pages/content_writing" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                  Content Writing
                </Link>
              </div>
            )}
          </div>
          <Link href="/pages/blog" onClick={() => handleButtonClick('blog')}>
            <span className="text-black font-semibold">Blog</span>
          </Link>
          <Link href="/pages/contactus" onClick={() => handleButtonClick('contactus')}>
            <span className="text-black font-semibold">Contact Us</span>
          </Link>
        </nav>

        {/* Call to Action Button */}
        <Link
          href="/pages/contactus"
          className="hidden lg:block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full"
        >
          WhichHosting?
        </Link>
      </div>
    </header>
  );
}
