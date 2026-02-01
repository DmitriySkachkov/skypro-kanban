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

function RegisterPage() {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const { register } = useAuth();
  const navigate = useNavigate();

  const validateForm = () => {
    if (!login.trim()) {
      setError('Введите логин');
      return false;
    }
    if (!name.trim()) {
      setError('Введите имя');
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
    if (password !== confirmPassword) {
      setError('Пароли не совпадают');
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
    
    const result = await register({ login, password, name });
    
    if (result.success) {
      navigate('/login');
    } else {
      setError(result.error || 'Ошибка регистрации');
    }
    
    setIsLoading(false);
  };

  return (
    <LoginPageContainer>
      <LoginForm onSubmit={handleSubmit}>
        <LoginLogo>
          <img src="/logo.png" alt="Skypro Kanban" />
        </LoginLogo>
        
        <FormTitle>Регистрация</FormTitle>
        
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
          type="text"
          placeholder="Имя"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
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
        
        <LoginInput
          type="password"
          placeholder="Подтвердите пароль"
          value={confirmPassword}
          onChange={(e) => {
            setConfirmPassword(e.target.value);
            setError('');
          }}
          disabled={isLoading}
          required
        />
        
        <LoginButton type="submit" disabled={isLoading}>
          {isLoading ? 'Регистрация...' : 'Зарегистрироваться'}
        </LoginButton>
        
        <LoginLink as={Link} to="/login">
          Уже есть аккаунт? Войти
        </LoginLink>
      </LoginForm>
    </LoginPageContainer>
  );
}

export default RegisterPage;