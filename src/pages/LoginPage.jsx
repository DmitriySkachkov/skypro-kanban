import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import {
  LoginPageContainer,
  LoginForm,
  LoginLogo,
  LoginInput,
  LoginButton,
  LoginLink,
  ErrorMessage,
  FormTitle
} from './LoginPage.styled';

function LoginPage() {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const { login: authLogin } = useAuth();
  const navigate = useNavigate();

  const validateForm = () => {
    if (!login.trim()) {
      setError('Введите логин');
      return false;
    }
    if (!password.trim()) {
      setError('Введите пароль');
      return false;
    }
    if (password.length < 3) {
      setError('Пароль должен содержать минимум 3 символа');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    
    const result = await authLogin({ login, password });
    
    if (result.success) {
      navigate('/');
    } else {
      setError(result.error || 'Неверный логин или пароль');
    }
    
    setIsLoading(false);
  };

  return (
    <LoginPageContainer>
      <LoginForm onSubmit={handleSubmit}>
        <LoginLogo>
          <img src="/logo.png" alt="Skypro Kanban" />
        </LoginLogo>
        
        <FormTitle>Вход в систему</FormTitle>
        
        {error && <ErrorMessage>{error}</ErrorMessage>}
        
        <LoginInput
          type="text"
          placeholder="Логин"
          value={login}
          onChange={(e) => {
            setLogin(e.target.value);
            setError('');
          }}
          disabled={isLoading}
          required
        />
        
        <LoginInput
          type="password"
          placeholder="Пароль"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            setError('');
          }}
          disabled={isLoading}
          required
        />
        
        <LoginButton type="submit" disabled={isLoading}>
          {isLoading ? 'Загрузка...' : 'Войти'}
        </LoginButton>
        
        <LoginLink as={Link} to="/register">
          Ещё нет аккаунта? Зарегистрироваться
        </LoginLink>
      </LoginForm>
    </LoginPageContainer>
  );
}

export default LoginPage;