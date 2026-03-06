"use client"

import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import Image from 'next/image'; // Use next/image if you're using Next.js
import logo from '../../../../public/assets/landingPage/Asset 1.svg';

const Footer = () => {
  return (
    <footer className="bg-black px-6 lg:px-14 overflow-hidden text-white py-16">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Left Section */}
        <div>
          {/* Logo instead of #13 */}
          <Image src={logo} alt="Logo" width={100} height={100} className="mb-4" />
     
          
          <p className="text-gray-400 mb-6">
              Making India 🇮🇳 Future Ready
          </p>
          <p className="text-gray-400 mb-6">
          Powered By LinuxWorld
          </p>
          <div className="flex space-x-4">
            <a href="https://www.linkedin.com/company/83485021/admin/dashboard/" className="bg-gray-700 p-3 rounded">
              <FaLinkedinIn />
            </a>
            <a href="https://x.com/OfficialHash13" className="bg-gray-700 p-3 rounded">
              <FaTwitter />
            </a>
            <a href="https://www.instagram.com/officialhash13?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="bg-gray-700 p-3 rounded">
    <FaInstagram />
  </a>
            <a href="https://www.facebook.com/OfficialHash13" className="bg-gray-700 p-3 rounded">
              <FaFacebookF />
            </a>
          </div>
        </div>

        {/* Links Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Links</h3>
          <ul className="space-y-2">
            <li><a href="#home" className="text-gray-400 hover:text-white">Home</a></li>
            <li><a href="#about" className="text-gray-400 hover:text-white">About Us</a></li>
            {/* <li><a href="#" className="text-gray-400 hover:text-white">Registration</a></li> */}
            <li><a href="#courses" className="text-gray-400 hover:text-white">Courses</a></li>
            <li><a href="#contact" className="text-gray-400 hover:text-white">Contact Us</a></li>
            {/* <li><a href="#" className="text-gray-400 hover:text-white">Blog</a></li> */}
          </ul>
        </div>

        {/* Legal Section */}
        {/* <div>
          <h3 className="text-xl font-semibold mb-4">Legal</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-400 hover:text-white">Terms of Use</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Terms & Condition</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Payment Method</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Licensing</a></li>
          </ul>
        </div> */}

        {/* Newsletter Section */}
        {/* <div>
          <h3 className="text-xl font-semibold mb-4">Newsletter</h3>
          <p className="text-gray-400 mb-4">
            Join over <span className="text-[#ff0000]">68,000</span> people getting our emails. Lorem ipsum dolor sit amet.
          </p>
          <form className="flex flex-col">
            <input
              type="email"
              placeholder="Enter your mail"
              className="p-3 rounded mb-4 text-black"
            />
            <button className="bg-[#ff0000] hover:bg-red-700 text-white py-3 px-6 rounded">
              Subscribe Now
            </button>
          </form>
        </div> */}
      </div>
      <div className="container mx-auto mt-16 text-center text-gray-400">
        <p>© Copyright 2024 #13 | Designed & Developed with ❤️ by LinuxWorld | All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
