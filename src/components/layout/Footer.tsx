import React from 'react';
import { ChefHat, Instagram, Facebook, Twitter } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-amber-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo and About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <ChefHat size={28} className="text-amber-300" />
              <span className="font-serif font-bold text-2xl text-white">
                Gusto
              </span>
            </div>
            <p className="text-amber-200 mb-6">
              Culinary excellence in every bite. Experience the perfect blend of tradition and innovation.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-white hover:text-amber-300 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-amber-300 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-amber-300 transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="font-serif font-bold text-lg mb-4 text-white">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {['Home', 'Menu', 'About', 'Reservations', 'Contact'].map(link => (
                <li key={link}>
                  <a 
                    href={`#${link.toLowerCase()}`}
                    className="text-amber-200 hover:text-white transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Opening Hours */}
          <div>
            <h3 className="font-serif font-bold text-lg mb-4 text-white">
              Opening Hours
            </h3>
            <ul className="space-y-2 text-amber-200">
              <li className="flex justify-between">
                <span>Monday - Friday</span>
                <span>5:00 PM - 10:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday</span>
                <span>12:00 PM - 11:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span>12:00 PM - 11:00 PM</span>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="font-serif font-bold text-lg mb-4 text-white">
              Newsletter
            </h3>
            <p className="text-amber-200 mb-4">
              Subscribe to our newsletter for special offers and updates.
            </p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Your email"
                className="bg-amber-800 text-white placeholder:text-amber-400 px-4 py-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-amber-500 flex-grow"
              />
              <button 
                type="submit"
                className="bg-amber-600 hover:bg-amber-500 text-white px-4 py-2 rounded-r-lg transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-amber-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-amber-300 text-sm mb-4 md:mb-0">
              © {currentYear} Gusto Restaurant. All rights reserved.
            </p>
            <div className="flex gap-4 text-sm text-amber-300">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};