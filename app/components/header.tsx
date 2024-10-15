"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="800 text-white">
      <div className="container mx-auto">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-4">
              <Image
                src="/images/Logo4.png" // Update this path
                alt="Your Company Logo"
                width={75} // Adjust as needed
                height={30} // Adjust as needed
                className="mr-2" // Add margin if needed
              />
              <Image
                src="/images/LogoTextWhite.png" // Update this path
                alt="Your Company Logo"
                width={125} // Adjust as needed
                height={50} // Adjust as needed
                className="mr-24" // Add margin if needed
              />
            </Link>
          </div>

          {/* Desktop menu */}
          <nav className="hidden xs:flex space-x-4">
            <Link href="/x.com" className="hover:text-black-300">
              APP
            </Link>
            <Link href="/birdeye.so" className="hover:text-black-300">
              ABOUT
            </Link>
            <Link href="/discord.com" className="hover:text-black-300">
              SPAM
            </Link>
            <Link href="/discord.com" className="hover:text-black-300">
              SOCIAL
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="xs:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white focus:outline-none"
            >
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                  />
                ) : (
                  <path
                    fillRule="evenodd"
                    d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="xs:hidden">
            <nav className="flex flex-col space-y-2 py-4">
              <Link href="/about" className="hover:text-gray-300">
                APP
              </Link>
              <Link href="/about" className="hover:text-gray-300">
                ABOUT
              </Link>
              <Link href="/services" className="hover:text-gray-300">
                SPAM
              </Link>
              <Link href="/contact" className="hover:text-gray-300">
                SOCIAL
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
