"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const Header = () => {
  return (
    <div className="container mx-auto">
      <div className="flex items-center justify-between py-4">
        <div className="flex items-center">
          <Link href="/" className="flex items-center space-x-4">
            <Image
              src="/images/FloodTextWhite.png" // Update this path
              alt="Your Company Logo"
              width={200} // Adjust as needed
              height={80} // Adjust as needed
              className="mr-24 md:ml-[-10]" // Add margin if needed
            />
          </Link>
        </div>

        {/* Desktop menu */}
        <nav className="hidden xs:flex space-x-4 text-white">
          <Link href="app.floodsui.com" className="hover:text-black-300">
            APP
          </Link>
          <Link href="#about" className="hover:text-black-300">
            ABOUT
          </Link>
          <Link href="#spam" className="hover:text-black-300">
            SPAM
          </Link>
          <Link href="#social" className="hover:text-black-300">
            SOCIAL
          </Link>
          <Link href="#supply" className="hover:text-black-300">
            SUPPLY
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Header;
