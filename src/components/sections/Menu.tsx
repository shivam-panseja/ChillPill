import React, { useState } from 'react';

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: string;
  category: string;
  image?: string;
  dietary?: string[];
}

export const Menu: React.FC = () => {
  const categories = ['All', 'Starters', 'Main Courses', 'Seafood', 'Desserts'];
  const [activeCategory, setActiveCategory] = useState('All');
  
  const menuItems: MenuItem[] = [
    // Starters
    {
      id: 1,
      name: 'Bruschetta',
      description: 'Grilled bread rubbed with garlic, topped with diced tomatoes, fresh basil, and olive oil',
      price: '$12',
      category: 'Starters',
      dietary: ['Vegetarian']
    },
    {
      id: 2,
      name: 'Arancini',
      description: 'Crispy rice balls stuffed with mozzarella, peas, and saffron',
      price: '$14',
      category: 'Starters',
      dietary: ['Vegetarian']
    },
    {
      id: 3,
      name: 'Beef Carpaccio',
      description: 'Thinly sliced raw beef with arugula, capers, parmesan, and truffle oil',
      price: '$16',
      category: 'Starters'
    },
    
    // Main Courses
    {
      id: 4,
      name: 'Pappardelle Bolognese',
      description: 'Homemade wide ribbon pasta with slow-cooked beef and pork ragù',
      price: '$22',
      category: 'Main Courses'
    },
    {
      id: 5,
      name: 'Mushroom Risotto',
      description: 'Creamy Arborio rice with wild mushrooms, white wine, and parmesan',
      price: '$20',
      category: 'Main Courses',
      dietary: ['Vegetarian', 'Gluten-Free']
    },
    {
      id: 6,
      name: 'Braised Lamb Shank',
      description: 'Slow-cooked lamb with red wine reduction, served with creamy polenta',
      price: '$32',
      category: 'Main Courses',
      dietary: ['Gluten-Free']
    },
    
    // Seafood
    {
      id: 7,
      name: 'Grilled Octopus',
      description: 'Tender octopus with fingerling potatoes, pickled red onions, and chimichurri',
      price: '$26',
      category: 'Seafood',
      dietary: ['Gluten-Free']
    },
    {
      id: 8,
      name: 'Seared Scallops',
      description: 'Pan-seared scallops with cauliflower purée, brown butter, and crispy capers',
      price: '$30',
      category: 'Seafood',
      dietary: ['Gluten-Free']
    },
    {
      id: 9,
      name: 'Seafood Linguine',
      description: 'Fresh pasta with shrimp, clams, calamari, and mussels in a light tomato sauce',
      price: '$28',
      category: 'Seafood'
    },
    
    // Desserts
    {
      id: 10,
      name: 'Tiramisu',
      description: 'Classic Italian dessert with layers of coffee-soaked ladyfingers and mascarpone cream',
      price: '$10',
      category: 'Desserts',
      dietary: ['Vegetarian']
    },
    {
      id: 11,
      name: 'Panna Cotta',
      description: 'Vanilla bean custard with seasonal berry compote',
      price: '$12',
      category: 'Desserts',
      dietary: ['Gluten-Free', 'Vegetarian']
    },
    {
      id: 12,
      name: 'Chocolate Fondant',
      description: 'Warm chocolate cake with a molten center, served with vanilla ice cream',
      price: '$14',
      category: 'Desserts',
      dietary: ['Vegetarian']
    }
  ];
  
  const filteredItems = activeCategory === 'All' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);
  
  return (
    <section id="menu" className="py-20 bg-amber-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-amber-900 mb-4">
            Our Menu
          </h2>
          <p className="text-amber-700 max-w-2xl mx-auto">
            Discover our carefully curated selection of dishes, prepared with the finest seasonal ingredients.
          </p>
        </div>
        
        {/* Category Filters */}
        <div className="flex justify-center flex-wrap gap-2 mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full transition-all duration-200 ${
                activeCategory === category
                  ? 'bg-amber-600 text-white shadow-md'
                  : 'bg-white text-amber-800 hover:bg-amber-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* Menu Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {filteredItems.map(item => (
            <div 
              key={item.id}
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex justify-between">
                <div className="flex-1">
                  <h3 className="text-xl font-serif font-bold text-amber-900 mb-2">
                    {item.name}
                  </h3>
                  <p className="text-amber-700 mb-3">{item.description}</p>
                  
                  {item.dietary && item.dietary.length > 0 && (
                    <div className="flex gap-2 mb-3">
                      {item.dietary.map(diet => (
                        <span 
                          key={diet} 
                          className="inline-block bg-amber-100 text-amber-800 text-xs px-2 py-1 rounded"
                        >
                          {diet}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
                
                <div className="text-lg font-medium text-amber-700 ml-4">
                  {item.price}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};