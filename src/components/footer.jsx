
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-600 to-gray-900 text-white py-8">
      <div className="container mx-auto text-center">
        {/* Footer Text */}
        <p className="text-lg font-semibold mb-4">&copy; 2025 Saylani Welfare. All rights reserved.</p>
        
        {/* Footer Links */}
        <div className="mt-4 flex justify-center space-x-6">
          <Link href="/contact" className="text-lg hover:text-blue-400 transition-colors duration-300">Contact Us</Link>
          <Link href="/privacy" className="text-lg hover:text-blue-400 transition-colors duration-300">Privacy Policy</Link>
        </div>
        
        {/* Optional: Social Media Links */}
        <div className="mt-6 flex justify-center space-x-6">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-lg hover:text-blue-600 transition-colors duration-300">
            Facebook
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-lg hover:text-blue-400 transition-colors duration-300">
            Twitter
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-lg hover:text-pink-400 transition-colors duration-300">
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
