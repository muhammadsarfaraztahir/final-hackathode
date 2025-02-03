// components/Header.js

import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header className="p-4 bg-gray-100 border-b border-gray-300 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-bold">
          <Image src="/logo.png" width={200} height={40} alt="logo" />
        </div>

        {/* Navigation Links */}
        <nav>
          <ul className="flex space-x-6 text-gray-700">
            <li>
              <Link href="/" className="hover:text-blue-500 transition-colors duration-300">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-blue-500 transition-colors duration-300">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-blue-500 transition-colors duration-300">
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
