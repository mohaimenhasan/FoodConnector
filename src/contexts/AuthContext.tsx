import React, { createContext, useState, useContext } from 'react';
import { User } from '../types/types'; // Update the import path as necessary

interface AuthContextProps {
  authenticated: boolean;
  currentUser: User | null;
  login: (user: User) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextProps>({
  authenticated: false,
  currentUser: null,
  login: () => {},
  logout: () => {},
});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  const login = (user: User) => {
    setAuthenticated(true);
    setCurrentUser(user);
  };

  const logout = () => {
    setAuthenticated(false);
    setCurrentUser(null);
  };

  return (
    <AuthContext.Provider value={{ authenticated, currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
