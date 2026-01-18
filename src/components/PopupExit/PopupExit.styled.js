import styled from 'styled-components';
import { theme } from '../../theme/theme';

export const PopupExitOverlay = styled.div`
  display: ${props => props.$isOpen ? 'flex' : 'none'};
  width: 100%;
  height: 100%;
  min-width: 320px;
  min-height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${theme.colors.overlay};
  padding: 40px;
  overflow-y: auto;

  @media screen and (max-width: ${theme.breakpoints.tablet}) {
    padding: 20px;
  }
`;

export const PopupExitBlock = styled.div`
  display: block;
  margin: 0 auto;
  background-color: ${theme.colors.white};
  max-width: 370px;
  width: 100%;
  padding: 50px 60px;
  border-radius: 10px;
  border: 0.7px solid ${theme.colors.border};
  box-shadow: ${theme.colors.shadow};
  position: relative;

  @media screen and (max-width: ${theme.breakpoints.tablet}) {
    padding: 30px 20px;
  }
`;

export const PopupExitTitle = styled.h2`
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  line-height: 30px;
  letter-spacing: -0.4px;
  margin-bottom: 20px;
  color: ${theme.colors.textPrimary};
`;

export const PopupExitForm = styled.form`
  width: 100%;
`;

export const PopupExitFormGroup = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;

  @media only screen and (max-width: 375px) {
    flex-direction: column;
  }
`;

export const PopupExitButton = styled.button`
  width: 153px;
  height: 30px;
  border-radius: 4px;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  line-height: 21px;
  font-weight: 500;
  letter-spacing: -0.14px;
  transition: all 0.2s ease;
  cursor: pointer;

  ${props => props.$variant === 'primary' && `
    background-color: ${theme.colors.primary};
    color: ${theme.colors.white};
    
    &:hover {
      background-color: ${theme.colors.primaryHover};
    }
  `}

  ${props => props.$variant === 'secondary' && `
    background-color: transparent;
    border: 0.7px solid ${theme.colors.primary};
    color: ${theme.colors.primary};
    
    &:hover {
      background-color: ${theme.colors.primary};
      color: ${theme.colors.white};
    }
  `}

  @media only screen and (max-width: ${theme.breakpoints.mobile}) {
    width: 100%;
    height: 40px;
    margin-bottom: ${props => props.$variant === 'primary' ? '10px' : '0'};
  }
`;