import React from 'react';
import { MapPin, Clock, Phone, Mail } from 'lucide-react';

export const Contact: React.FC = () => {
  const contactInfo = [
    {
      icon: <MapPin size={24} className="text-amber-600" />,
      label: 'Address',
      value: '123 Gourmet Street, Culinary District, NY 10001',
      link: 'https://maps.google.com',
      linkLabel: 'View on Map'
    },
    {
      icon: <Clock size={24} className="text-amber-600" />,
      label: 'Opening Hours',
      value: 'Mon-Fri: 5:00 PM - 10:00 PM, Sat-Sun: 12:00 PM - 11:00 PM'
    },
    {
      icon: <Phone size={24} className="text-amber-600" />,
      label: 'Phone',
      value: '+1 (555) 123-4567',
      link: 'tel:+15551234567',
      linkLabel: 'Call Us'
    },
    {
      icon: <Mail size={24} className="text-amber-600" />,
      label: 'Email',
      value: 'reservations@gusto-restaurant.com',
      link: 'mailto:reservations@gusto-restaurant.com',
      linkLabel: 'Send Email'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-amber-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-amber-900 mb-4">
            Contact Us
          </h2>
          <p className="text-amber-700 max-w-2xl mx-auto">
            Have questions or need more information? We're here to help you plan your perfect dining experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Map */}
          <div className="rounded-xl overflow-hidden shadow-lg h-[400px] bg-white">
            <div className="relative h-full w-full">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.119763973046!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25903922635f1%3A0x1f0c236d0044119a!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1620131242319!5m2!1sen!2s" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                title="Restaurant location"
              ></iframe>
            </div>
          </div>
          
          {/* Contact Information */}
          <div className="space-y-6">
            {contactInfo.map((item, index) => (
              <div 
                key={index}
                className="flex gap-4 bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex-shrink-0 mt-1">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-serif font-bold text-lg text-amber-900 mb-1">
                    {item.label}
                  </h3>
                  <p className="text-amber-700 mb-2">
                    {item.value}
                  </p>
                  {item.link && (
                    <a 
                      href={item.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-block text-amber-600 hover:text-amber-800 font-medium transition-colors"
                    >
                      {item.linkLabel} →
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};