import styled from 'styled-components';
import { theme } from '../theme/theme';

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
  margin-bottom: 30px;
  
  & img {
    width: 120px;
  }
`;

export const FormTitle = styled.h2`
  color: ${theme.colors.textPrimary};
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 30px;
  text-align: center;
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
  transition: border-color 0.2s ease;
  
  &::placeholder {
    color: ${theme.colors.textSecondary};
  }
  
  &:focus {
    border-color: ${theme.colors.primary};
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
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
  
  &:hover:not(:disabled) {
    background-color: ${theme.colors.primaryHover};
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
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

export const ErrorMessage = styled.div`
  width: 100%;
  padding: 10px 14px;
  margin-bottom: 20px;
  background-color: #ffeaea;
  color: #d32f2f;
  border-radius: 8px;
  font-size: 14px;
  text-align: center;
`;