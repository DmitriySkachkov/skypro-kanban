import { useState } from 'react';
import AuthContext from './auth-context';

export default function AuthProvider({ children }) {
  const [isAuth, setIsAuth] = useState(() => {
    const savedAuth = localStorage.getItem('isAuth');
    return savedAuth === 'true';
  });

  const login = () => {
    setIsAuth(true);
    localStorage.setItem('isAuth', 'true');
  };

  const logout = () => {
    setIsAuth(false);
    localStorage.removeItem('isAuth');
  };

  const value = {
    isAuth,
    login,
    logout
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}