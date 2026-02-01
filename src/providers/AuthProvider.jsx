import { useState, useCallback, useEffect } from 'react';
import AuthContext from '../context/auth-context';
import { loginUser, registerUser, getCurrentUser } from '../services/auth-api';

export default function AuthProvider({ children }) {
  const [isAuth, setIsAuth] = useState(false);
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const checkAuth = useCallback(async () => {
    try {
      const userData = await getCurrentUser();
      if (userData) {
        setIsAuth(true);
        setUser(userData);
      }
    } catch {
      // Ошибка при проверке авторизации - пользователь не авторизован
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  const login = useCallback(async ({ login, password }) => {
    try {
      setIsLoading(true);
      const response = await loginUser({ login, password });
      
      setIsAuth(true);
      setUser(response.user || response);
      return { success: true };
    } catch (error) {
      return { 
        success: false, 
        error: error.message || 'Ошибка авторизации' 
      };
    } finally {
      setIsLoading(false);
    }
  }, []);

  const register = useCallback(async ({ login, password, name }) => {
    try {
      setIsLoading(true);
      const response = await registerUser({ login, password, name });
      return { success: true, data: response };
    } catch (error) {
      return { 
        success: false, 
        error: error.message || 'Ошибка регистрации' 
      };
    } finally {
      setIsLoading(false);
    }
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setIsAuth(false);
    setUser(null);
  }, []);

  const value = {
    isAuth,
    user,
    isLoading,
    login,
    register,
    logout,
    checkAuth
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}