import React from 'react';

interface Dish {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  tag?: string;
}

export const FeaturedDishes: React.FC = () => {
  const featuredDishes: Dish[] = [
    {
      id: 1,
      name: 'Truffle Risotto',
      description: 'Creamy Arborio rice with wild mushrooms, finished with truffle oil and parmesan',
      price: '$24',
      image: 'https://images.pexels.com/photos/9843169/pexels-photo-9843169.jpeg?auto=compress&cs=tinysrgb&w=800',
      tag: 'Chef\'s Special'
    },
    {
      id: 2,
      name: 'Seared Sea Bass',
      description: 'Pan-seared sea bass with lemon butter sauce, served with seasonal vegetables',
      price: '$28',
      image: 'https://images.pexels.com/photos/6210774/pexels-photo-6210774.jpeg?auto=compress&cs=tinysrgb&w=800',
      tag: 'Popular'
    },
    {
      id: 3,
      name: 'Braised Short Rib',
      description: 'Slow-cooked beef short rib with red wine reduction, served with creamy polenta',
      price: '$32',
      image: 'https://images.pexels.com/photos/4553031/pexels-photo-4553031.jpeg?auto=compress&cs=tinysrgb&w=800',
      tag: 'New'
    }
  ];

  return (
    <section className="py-20 bg-amber-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-amber-900 mb-4">
            Signature Dishes
          </h2>
          <p className="text-amber-700 max-w-2xl mx-auto">
            Our chef's carefully crafted specialties, featuring seasonal ingredients and exceptional flavors.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredDishes.map((dish) => (
            <div 
              key={dish.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={dish.image} 
                  alt={dish.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                {dish.tag && (
                  <div className="absolute top-4 right-4 bg-amber-600 text-white text-sm font-medium py-1 px-3 rounded-full">
                    {dish.tag}
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-serif font-bold text-amber-900">{dish.name}</h3>
                  <span className="text-lg font-medium text-amber-700">{dish.price}</span>
                </div>
                <p className="text-amber-700">{dish.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};