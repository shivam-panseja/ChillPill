import React from 'react';
import { Button } from '../ui/Button';

export const Hero: React.FC = () => {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center bg-amber-900 overflow-hidden" 
      style={{
        backgroundImage: 'url("https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg?auto=compress&cs=tinysrgb&w=1600")',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center py-20">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 animate-fadeIn">
            Experience Culinary Excellence
          </h1>
          
          <p className="text-lg md:text-xl text-amber-50 mb-8 max-w-2xl mx-auto animate-fadeIn animation-delay-200">
            Indulge in exquisite flavors crafted with passion and precision. 
            Our restaurant combines tradition with innovation to create unforgettable dining experiences.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeIn animation-delay-400">
            <Button size="lg" variant="primary" onClick={() => document.getElementById('reservation')?.scrollIntoView({ behavior: 'smooth' })}>
              Reserve a Table
            </Button>
            <Button size="lg" variant="outline" onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })} className="border-white text-white hover:bg-white/10">
              Explore Menu
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="text-white"
        >
          <path 
            d="M12 5V19M12 19L19 12M12 19L5 12" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </section>
  );
};