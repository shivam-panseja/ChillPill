import React from 'react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-amber-900 mb-6">
              Our Culinary Journey
            </h2>
            
            <p className="text-amber-800 mb-6 leading-relaxed">
              Founded in 2010, Gusto began as a small family-owned bistro dedicated to authentic flavors and warm hospitality. 
              Over the years, we've grown into one of the city's most beloved dining destinations, while staying true to our roots.
            </p>
            
            <p className="text-amber-800 mb-8 leading-relaxed">
              Our executive chef, Isabella Martinez, brings over 15 years of international culinary experience, 
              crafting dishes that blend traditional techniques with innovative approaches. Every ingredient is 
              carefully sourced from local farmers and producers who share our commitment to quality and sustainability.
            </p>
            
            <div className="flex items-center gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-600 mb-1">15+</div>
                <div className="text-sm text-amber-700">Years of Excellence</div>
              </div>
              
              <div className="w-px h-16 bg-amber-200"></div>
              
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-600 mb-1">4.8</div>
                <div className="text-sm text-amber-700">Customer Rating</div>
              </div>
              
              <div className="w-px h-16 bg-amber-200"></div>
              
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-600 mb-1">20k+</div>
                <div className="text-sm text-amber-700">Happy Customers</div>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="rounded-lg overflow-hidden h-48 md:h-64 shadow-lg transform translate-y-8">
                <img 
                  src="https://images.pexels.com/photos/2696064/pexels-photo-2696064.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Chef preparing food" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden h-48 md:h-64 shadow-lg">
                <img 
                  src="https://images.pexels.com/photos/5779364/pexels-photo-5779364.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Restaurant interior" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg overflow-hidden h-48 md:h-64 shadow-lg">
                <img 
                  src="https://images.pexels.com/photos/2544829/pexels-photo-2544829.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Fresh ingredients" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden h-48 md:h-64 shadow-lg transform translate-y-8">
                <img 
                  src="https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Dining area" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};