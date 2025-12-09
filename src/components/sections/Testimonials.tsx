import React, { useState, useEffect } from 'react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  comment: string;
  rating: number;
  image?: string;
}

export const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Emily Johnson',
      role: 'Food Critic',
      comment: 'The attention to detail in every dish is remarkable. This restaurant elevates traditional cuisine to an art form, with flavors that linger in your memory long after the meal.',
      rating: 5,
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Regular Customer',
      comment: 'We celebrated our anniversary here and the experience was magical. From the attentive service to the perfectly executed dishes, everything was impeccable.',
      rating: 5,
      image: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 3,
      name: 'Sophia Williams',
      role: 'Local Foodie',
      comment: 'The seasonal menu keeps me coming back. Each visit brings new flavors and inspirations, but the quality and attention to detail never waver.',
      rating: 4,
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];
  
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    
    return () => clearInterval(interval);
  }, [testimonials.length]);
  
  // Render stars based on rating
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <svg
        key={index}
        className={`w-5 h-5 ${index < rating ? 'text-amber-500' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };
  
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-amber-900 mb-4">
            What Our Guests Say
          </h2>
          <p className="text-amber-700 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our valued customers have to say about their dining experience.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-amber-50 rounded-xl p-8 md:p-10 shadow-lg relative overflow-hidden">
            {/* Large quotation mark */}
            <div className="absolute top-0 left-0 text-amber-200 opacity-50 text-9xl leading-none">"</div>
            
            {/* Testimonial content */}
            <div className="relative z-10">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-6">
                {testimonials[currentIndex].image && (
                  <div className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0 border-4 border-white shadow-md">
                    <img 
                      src={testimonials[currentIndex].image} 
                      alt={testimonials[currentIndex].name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                
                <div className="text-center md:text-left">
                  <h3 className="text-xl font-serif font-bold text-amber-900">
                    {testimonials[currentIndex].name}
                  </h3>
                  <p className="text-amber-700">{testimonials[currentIndex].role}</p>
                  <div className="flex justify-center md:justify-start mt-2">
                    {renderStars(testimonials[currentIndex].rating)}
                  </div>
                </div>
              </div>
              
              <blockquote className="text-lg text-amber-800 italic mb-6">
                "{testimonials[currentIndex].comment}"
              </blockquote>
              
              {/* Navigation dots */}
              <div className="flex justify-center gap-2 mt-8">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      currentIndex === index 
                        ? 'bg-amber-600 w-6' 
                        : 'bg-amber-300 hover:bg-amber-400'
                    }`}
                    aria-label={`View testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};