import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { getUser } from '../api/auth';

interface User {
  name: string;
  email: string;
  profile?: string;
}

interface AuthContextType {
  user: User | null;
  token: string | null;
  login: (userData: User, token:string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(localStorage.getItem('token'));

  useEffect(() => {
    const loadUser = async () => {
      if (token) {
        try {
          const userData = await getUser();
          setUser({ name: userData.Name, email: userData.email, profile: userData.Profile });
        } catch (error) {
          console.error('Failed to load user:', error);
          logout();
        }
      }
    };
    loadUser();
  }, [token]);

  const login = (userData: User, token: string) => {
    setUser({ name: userData.name, email: userData.email, profile: userData.profile });
    setToken(token);
    localStorage.setItem('token', token);
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem('token');
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};