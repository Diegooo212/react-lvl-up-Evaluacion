// src/context/AuthContext.tsx
import React, { createContext, useState, useEffect, ReactNode, useContext } from 'react';
// Importa los tipos actualizados
import { User, AuthContextType, UserProfile } from '../types/AuthContextType'; 

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth debe ser usado dentro de un AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(() => {
    const storedUser = localStorage.getItem('userReact');
    return storedUser ? JSON.parse(storedUser) : null;
  });

  useEffect(() => {
    if (currentUser) {
      localStorage.setItem('userReact', JSON.stringify(currentUser));
    } else {
      localStorage.removeItem('userReact');
    }
  }, [currentUser]);

  const login = (email: string, role: 'user' | 'admin') => {

    const storedUser = localStorage.getItem('userReact');
    let profile: UserProfile | undefined = undefined;
    if (storedUser) {
        const parsedUser: User = JSON.parse(storedUser);
        if(parsedUser.email === email && parsedUser.profile) {
            profile = parsedUser.profile;
        }
    }
    
    const user: User = { email, role, profile };
    setCurrentUser(user);
    alert(`Bienvenido ${email}!`);
  };

  const logout = () => {
    setCurrentUser(null);
    localStorage.removeItem('carritoReact');
    window.location.reload(); 
    alert('Sesión cerrada.');
  };

  
  const updateUserProfile = (profile: UserProfile) => {
    if (currentUser) {
      const updatedUser = {
        ...currentUser,
        profile: profile
      };
      setCurrentUser(updatedUser); 
      console.log("Perfil de usuario actualizado:", updatedUser);
    } else {
        console.warn("Se intentó actualizar el perfil sin un usuario logueado.");
    }
  };
  // --------------------

  const contextValue: AuthContextType = {
    currentUser,
    login,
    logout,
    updateUserProfile, 
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
};