import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  LoginPageContainer,
  LoginForm,
  LoginLogo,
  LoginInput,
  LoginButton,
  LoginLink
} from './LoginPage.styled';

function RegisterPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Регистрация:', { email, password });
    navigate('/login');
  };

  const handleLoginClick = (e) => {
    e.preventDefault();
    navigate('/login');
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
        
        <LoginInput
          type="password"
          placeholder="Подтвердите пароль"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        
        <LoginButton type="submit">
          Зарегистрироваться
        </LoginButton>
        
        <LoginLink href="#" onClick={handleLoginClick}>
          Уже есть аккаунт? Войти
        </LoginLink>
      </LoginForm>
    </LoginPageContainer>
  );
}

export default RegisterPage;