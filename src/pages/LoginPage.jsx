import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../useAuth';
import {
  LoginPageContainer,
  LoginForm,
  LoginLogo,
  LoginInput,
  LoginButton,
  LoginLink
} from './LoginPage.styled';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    login();
    navigate('/');
  };

  const handleRegisterClick = (e) => {
    e.preventDefault();
    navigate('/register');
  };

  return (
    <LoginPageContainer>
      <LoginForm onSubmit={handleSubmit}>
        <LoginLogo>
          <img src="/logo.png" alt="Skypro Kanban" />
        </LoginLogo>
        
        <LoginInput
          type="email"
          placeholder="Эл. почта"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        
        <LoginInput
          type="password"
          placeholder="Пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        
        <LoginButton type="submit">
          Войти
        </LoginButton>
        
        <LoginLink href="#" onClick={handleRegisterClick}>
          Зарегистрироваться
        </LoginLink>
      </LoginForm>
    </LoginPageContainer>
  );
}

export default LoginPage;