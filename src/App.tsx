import { useState } from 'react';
import { Login } from './components/auth/Login';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { FeaturedDishes } from './components/sections/FeaturedDishes';
import { About } from './components/sections/About';
import { Menu } from './components/sections/Menu';
import { Testimonials } from './components/sections/Testimonials';
import { Reservation } from './components/sections/Reservation';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/layout/Footer';

function App() {
  const [showLogin, setShowLogin] = useState(false);
  
  return (
    <div className="font-sans">
      {showLogin && <Login onClose={() => setShowLogin(false)} />}
      <Navbar onLoginClick={() => setShowLogin(true)} />
      <main>
        <Hero />
        <FeaturedDishes />
        <About />
        <Menu />
        <Testimonials />
        <Reservation />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;