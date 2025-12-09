import React, { useState } from 'react';
import { X } from 'lucide-react';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import { loginUser, registerUser } from '../../api/auth';
import { useAuth } from '../../context/AuthContext';

interface LoginProps {
  onClose: () => void;
}

export const Login: React.FC<LoginProps> = ({ onClose }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [profile, setProfile] = useState('');
  const [userType, setUserType] = useState('client');
  const { login } = useAuth();


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (isLogin) {
        const data = await loginUser(email, password);
        login({ name: data.Name, email: data.email, profile: data.Profile }, data.token);
        console.log('Login successful:', data);
      } else {
        const data = await registerUser(
          name,
          email,
          password,
          phoneNumber,
          address,
          profile,
          userType
        );
        console.log('Registration successful:', data);
        alert('Signed up successfully! Please log in.');
        setIsLogin(true);
      }
      onClose();
    } catch (error: any) {
      console.error('Authentication error:', error.message);
      alert(`Authentication failed: ${error.message}`);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div 
        className="bg-white rounded-xl max-w-md w-full p-6 shadow-2xl transform transition-all duration-300 ease-in-out"
        style={{ animation: 'fadeIn 0.3s ease-out' }}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-serif font-bold text-amber-800">
            {isLogin ? 'Welcome Back' : 'Join Us'}
          </h2>
          <button 
            onClick={onClose}
            className="text-amber-700 hover:text-amber-900 transition-colors"
          >
            <X size={24} />
          </button>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          {!isLogin && (
            <>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-amber-900 mb-1">
                  Full Name
                </label>
                <Input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your full name"
                  required={!isLogin}
                />
              </div>
              <div>
                <label htmlFor="phoneNumber" className="block text-sm font-medium text-amber-900 mb-1">
                  Phone Number
                </label>
                <Input
                  id="phoneNumber"
                  type="text"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  placeholder="Your phone number"
                  required={!isLogin}
                />
              </div>
              <div>
                <label htmlFor="address" className="block text-sm font-medium text-amber-900 mb-1">
                  Address
                </label>
                <Input
                  id="address"
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Your address"
                  required={!isLogin}
                />
              </div>
              <div>
                <label htmlFor="profile" className="block text-sm font-medium text-amber-900 mb-1">
                  Profile URL
                </label>
                <Input
                  id="profile"
                  type="text"
                  value={profile}
                  onChange={(e) => setProfile(e.target.value)}
                  placeholder="https://example.com/profile.jpg"
                  required={!isLogin}
                />
              </div>
              <div>
                <label htmlFor="userType" className="block text-sm font-medium text-amber-900 mb-1">
                  User Type
                </label>
                <select
                  id="userType"
                  value={userType}
                  onChange={(e) => setUserType(e.target.value)}
                  className="w-full px-3 py-2 border border-amber-300 rounded-md shadow-sm focus:outline-none focus:ring-amber-500 focus:border-amber-500"
                  required={!isLogin}
                >
                  <option value="client">Client</option>
                  <option value="vendor">Vendor</option>
                </select>
              </div>
            </>
          )}
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-amber-900 mb-1">
              Email
            </label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
            />
          </div>
          
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-amber-900 mb-1">
              Password
            </label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
            />
          </div>
          
          {isLogin && (
            <div className="text-right">
              <a href="#" className="text-sm text-amber-700 hover:text-amber-900 transition-colors">
                Forgot password?
              </a>
            </div>
          )}
          
          <Button type="submit" fullWidth>
            {isLogin ? 'Sign In' : 'Create Account'}
          </Button>
        </form>
        
        <div className="mt-6 text-center">
          <p className="text-amber-900">
            {isLogin ? "Don't have an account?" : "Already have an account?"}
            <button 
              onClick={() => setIsLogin(!isLogin)}
              className="ml-1 text-amber-600 hover:text-amber-800 font-medium transition-colors"
            >
              {isLogin ? 'Sign Up' : 'Sign In'}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};