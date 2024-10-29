"use client"; // This line indicates that this component runs on the client side

import React from 'react';
import { FaFacebookF, FaTwitter, FaGooglePlusG, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import Link from 'next/link'; // Import Next.js Link for proper routing

export default function Footer() {
  return (
    <div>
      {/* Social Network Section */}
      <div className="bg-[#FFA500] py-4">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 px-4">
          <h2 className="text-lg sm:text-xl font-bold text-white text-center md:text-left">
            Get connected with us on social networks!
          </h2>
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-white hover:text-gray-300">
              <FaFacebookF className="h-8 w-8 md:h-6 md:w-6" />
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              <FaTwitter className="h-8 w-8 md:h-6 md:w-6" />
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              <FaGooglePlusG className="h-8 w-8 md:h-6 md:w-6" />
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              <FaLinkedinIn className="h-8 w-8 md:h-6 md:w-6" />
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              <FaInstagram className="h-8 w-8 md:h-6 md:w-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Content */}
      <footer className="bg-[#27275B] text-white py-12">
        <div className="container mx-auto px-4">
          {/* Footer Content */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {/* Logo */}
            <div className="flex justify-center md:justify-start">
              <img src="logo.png" alt="Company Logo" className="h-20 sm:h-24 md:h-[120px]" /> {/* Increased logo size for mobile */}
            </div>

            {/* Services */}
            <div>
              <h3 className="text-xl sm:text-2xl md:text-xl font-bold mb-4 text-left">SERVICES</h3>
              <ul className="space-y-2 text-left text-lg sm:text-xl">
                <li>
                  <Link href="/pages/webdevelopment" className="hover:text-[#FFA500]">Web Development</Link>
                </li>
                <li>
                  <Link href="/pages/content_writing" className="hover:text-[#FFA500]">Content Writing</Link>
                </li>
                <li>
                  <Link href="/pages/Digital_marketing" className="hover:text-[#FFA500]">Digital Marketing</Link>
                </li>
                <li>
                  <Link href="/pages/graphic-designing" className="hover:text-[#FFA500]">Graphic Designing</Link>
                </li>
                <li>
                  <Link href="/pages/seo" className="hover:text-[#FFA500]">SEO</Link>
                </li>
                <li>
                  <Link href="/pages/video_editing" className="hover:text-[#FFA500]">Video Editing</Link>
                </li>
              </ul>
            </div>

            {/* Useful Links */}
            <div>
              <h3 className="text-xl sm:text-2xl md:text-xl font-bold mb-4 text-left">Help</h3>
              <ul className="space-y-2 text-left text-lg sm:text-xl">
                <li>
                  <Link href="/pages/aboutus" className="hover:text-[#FFA500]">About Us</Link>
                </li>
                <li>
                  <Link href="/pages/contactus" className="hover:text-[#FFA500]">Contact Us</Link>
                </li>
                <li>
                  <a href="/pages/privacypolicy" className="hover:text-[#FFA500]">Privacy Policy</a>
                </li>
                <li>
                  <a href="/pages/termsandconditions" className="hover:text-[#FFA500]">Terms Of Services</a>
                </li>
                <li>
                  <Link href="/inspire_me" className="hover:text-[#FFA500]">Inspire Me</Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-xl sm:text-2xl md:text-xl font-bold mb-4 text-left">CONTACT</h3>
              <p className="font-bold text-left text-lg sm:text-xl">Dubai, UAE:</p>
              <p className="text-left text-lg sm:text-xl">Office 605, Parklane Tower -</p>
              <p className="text-left text-lg sm:text-xl">Business Bay - Dubai</p>
              <p className="font-bold mt-4 text-left text-lg sm:text-xl">Abbottabad, Pakistan:</p>
              <p className="text-left text-lg sm:text-xl">Street #1, Kaghan Colony</p>
              <p className="text-left text-lg sm:text-xl">Mandian, Abbottabad</p>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="text-center mt-8">
            <p className="text-sm sm:text-base">© 2024 Your Company Name. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
