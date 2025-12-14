import styled from 'styled-components';
import { theme } from '../theme';

export const LoginPageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: ${theme.colors.mainBg};
  padding: 20px;
`;

export const LoginForm = styled.form`
  width: 100%;
  max-width: 370px;
  padding: 40px 30px;
  background-color: ${theme.colors.white};
  border-radius: 10px;
  box-shadow: ${theme.colors.shadow};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LoginLogo = styled.div`
  margin-bottom: 40px;
  
  & img {
    width: 120px;
  }
`;

export const LoginInput = styled.input`
  width: 100%;
  height: 40px;
  margin-bottom: 20px;
  padding: 0 14px;
  border: 1px solid ${theme.colors.borderLight};
  border-radius: 8px;
  background-color: transparent;
  font-size: 14px;
  color: ${theme.colors.textPrimary};
  outline: none;
  
  &::placeholder {
    color: ${theme.colors.textSecondary};
  }
  
  &:focus {
    border-color: ${theme.colors.primary};
  }
`;

export const LoginButton = styled.button`
  width: 100%;
  height: 40px;
  background-color: ${theme.colors.primary};
  color: ${theme.colors.white};
  border: none;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s ease;
  margin-bottom: 20px;
  
  &:hover {
    background-color: ${theme.colors.primaryHover};
  }
`;

export const LoginLink = styled.a`
  color: ${theme.colors.primary};
  font-size: 14px;
  text-decoration: none;
  cursor: pointer;
  transition: color 0.2s ease;
  
  &:hover {
    color: ${theme.colors.primaryHover};
  }
`;