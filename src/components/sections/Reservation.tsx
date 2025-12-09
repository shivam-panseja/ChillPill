import React, { useState } from 'react';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';

export const Reservation: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    specialRequests: ''
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle reservation submission logic
    console.log(formData);
    
    // For demo purposes
    alert('Reservation request submitted successfully!');
    setFormData({
      name: '',
      email: '',
      phone: '',
      date: '',
      time: '',
      guests: '2',
      specialRequests: ''
    });
  };
  
  // Generate time slots
  const generateTimeSlots = () => {
    const slots = [];
    for (let hour = 17; hour <= 21; hour++) {
      for (let minute = 0; minute < 60; minute += 30) {
        const formattedHour = hour % 12 === 0 ? 12 : hour % 12;
        const period = hour >= 12 ? 'PM' : 'AM';
        const formattedMinute = minute === 0 ? '00' : minute;
        
        slots.push(`${formattedHour}:${formattedMinute} ${period}`);
      }
    }
    return slots;
  };
  
  const timeSlots = generateTimeSlots();
  
  return (
    <section id="reservation" className="py-20 bg-amber-900 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              Reserve Your Table
            </h2>
            <p className="text-amber-200 max-w-2xl mx-auto">
              Secure your perfect dining experience with us. Reservations recommended for parties of all sizes.
            </p>
          </div>
          
          <div className="bg-white rounded-xl p-6 md:p-10 shadow-xl text-amber-900">
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-amber-800 mb-1">
                  Full Name
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-amber-800 mb-1">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-amber-800 mb-1">
                  Phone Number
                </label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="(555) 123-4567"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="guests" className="block text-sm font-medium text-amber-800 mb-1">
                  Number of Guests
                </label>
                <select
                  id="guests"
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-amber-50 border border-amber-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-300 text-amber-900"
                  required
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                    <option key={num} value={num}>
                      {num} {num === 1 ? 'Guest' : 'Guests'}
                    </option>
                  ))}
                  <option value="9+">9+ Guests</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="date" className="block text-sm font-medium text-amber-800 mb-1">
                  Date
                </label>
                <Input
                  id="date"
                  name="date"
                  type="date"
                  value={formData.date}
                  onChange={handleChange}
                  min={new Date().toISOString().split('T')[0]}
                  required
                />
              </div>
              
              <div>
                <label htmlFor="time" className="block text-sm font-medium text-amber-800 mb-1">
                  Time
                </label>
                <select
                  id="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-amber-50 border border-amber-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-300 text-amber-900"
                  required
                >
                  <option value="">Select a time</option>
                  {timeSlots.map(time => (
                    <option key={time} value={time}>
                      {time}
                    </option>
                  ))}
                </select>
              </div>
              
              <div className="md:col-span-2">
                <label htmlFor="specialRequests" className="block text-sm font-medium text-amber-800 mb-1">
                  Special Requests (Optional)
                </label>
                <textarea
                  id="specialRequests"
                  name="specialRequests"
                  value={formData.specialRequests}
                  onChange={handleChange}
                  rows={3}
                  className="w-full px-4 py-2 bg-amber-50 border border-amber-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-300 placeholder:text-amber-300 text-amber-900 transition-all duration-200"
                  placeholder="Any dietary restrictions, allergies, or special occasions?"
                />
              </div>
              
              <div className="md:col-span-2 text-center mt-4">
                <Button type="submit" size="lg">
                  Reserve Now
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};