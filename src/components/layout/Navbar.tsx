import { useState, useEffect, useRef } from 'react';
import { Menu, X, ChefHat, UserCircle, LogOut, Edit } from 'lucide-react';
import { Button } from '../ui/Button';
import { useAuth } from '../../context/AuthContext';

interface NavbarProps {
  onLoginClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onLoginClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { user, logout } = useAuth();
  const dropdownRef = useRef<HTMLDivElement>(null);
  
  // Handle scrolling effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Menu', href: '#menu' },
    { name: 'About', href: '#about' },
    { name: 'Reservations', href: '#reservation' },
    { name: 'Contact', href: '#contact' },
  ];
  
  return (
    <nav className={`fixed w-full z-40 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <ChefHat size={28} className="text-amber-700" />
            <span className="font-serif font-bold text-xl md:text-2xl text-amber-900">
              Gusto
            </span>
          </a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <ul className="flex gap-6">
              {navLinks.map(link => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className={`font-medium transition-colors ${
                      isScrolled ? 'text-amber-900 hover:text-amber-600' : 'text-white hover:text-amber-200'
                    }`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            {user ? (
              <div className="relative" ref={dropdownRef}>
                <button onClick={() => setIsDropdownOpen(!isDropdownOpen)} className="flex items-center gap-2 cursor-pointer">
                  {user.profile ? (
                    <img src={user.profile} alt={user.name} className="w-8 h-8 rounded-full object-cover" />
                  ) : (
                    <UserCircle size={28} className={isScrolled ? 'text-amber-800' : 'text-white'} />
                  )}
                </button>
                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                    <div className="px-4 py-2 border-b">
                      <p className="font-bold text-amber-900">{user.name}</p>
                      <p className="text-sm text-gray-500">{user.email}</p>
                    </div>
                    <a href="#update-profile" className="flex items-center gap-2 px-4 py-2 text-sm text-amber-800 hover:bg-amber-50">
                      <Edit size={16} />
                      Update Profile
                    </a>
                    <button onClick={logout} className="w-full text-left flex items-center gap-2 px-4 py-2 text-sm text-red-600 hover:bg-red-50">
                      <LogOut size={16} />
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Button 
                variant="primary" 
                size="sm"
                onClick={onLoginClick}
              >
                Sign In
              </Button>
            )}
          </div>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden" 
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X className={isScrolled ? 'text-amber-900' : 'text-white'} size={24} />
            ) : (
              <Menu className={isScrolled ? 'text-amber-900' : 'text-white'} size={24} />
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 w-full py-4 px-4 animate-fadeDown">
          <ul className="space-y-3">
            {navLinks.map(link => (
              <li key={link.name}>
                <a 
                  href={link.href}
                  className="block font-medium text-amber-900 hover:text-amber-600 transition-colors py-1"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-4 pt-4 border-t border-amber-100">
            {user ? (
              <div className="flex flex-col items-center gap-4">
                <div className="flex items-center gap-2 mb-2">
                  {user.profile ? (
                    <img src={user.profile} alt={user.name} className="w-10 h-10 rounded-full object-cover" />
                  ) : (
                    <UserCircle size={40} className="text-amber-800" />
                  )}
                  <div>
                    <p className="font-bold text-amber-900">{user.name}</p>
                    <p className="text-sm text-gray-500">{user.email}</p>
                  </div>
                </div>
                <Button 
                  variant="secondary" 
                  fullWidth
                  onClick={() => {/* Handle update profile click */}}
                >
                  Update Profile
                </Button>
                <Button 
                  variant="danger" 
                  fullWidth 
                  onClick={() => {
                    logout();
                    setIsOpen(false);
                  }}
                >
                  Logout
                </Button>
              </div>
            ) : (
              <Button 
                variant="primary" 
                fullWidth
                onClick={() => {
                  onLoginClick();
                  setIsOpen(false);
                }}
              >
                Sign In
              </Button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};