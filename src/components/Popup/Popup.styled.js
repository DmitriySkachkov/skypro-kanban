import styled from 'styled-components';

// Базовые стили для всех попапов
export const PopupOverlay = styled.div`
  display: ${props => props.$isOpen ? 'flex' : 'none'};
  width: 100%;
  height: 100%;
  min-width: 320px;
  min-height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: ${props => props.$zIndex || 5};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.4);
  padding: 0 16px;
`;

export const PopupBlock = styled.div`
  display: block;
  margin: 0 auto;
  background-color: #FFFFFF;
  max-width: ${props => props.$maxWidth || '370px'};
  width: 100%;
  padding: ${props => props.$padding || '50px 60px'};
  border-radius: 10px;
  border: 0.7px solid #D4DBE5;
  box-shadow: 0px 4px 67px -12px rgba(0, 0, 0, 0.13);
  position: relative;
`;

export const PopupTitle = styled.h2`
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  line-height: 30px;
  letter-spacing: -0.4px;
  margin-bottom: 20px;
  color: #000;
`;

export const PopupForm = styled.form`
  width: 100%;
`;

export const PopupFormGroup = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const PopupButton = styled.button`
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

  ${props => props.$variant === 'primary' && `
    background-color: #565EEF;
    color: #FFFFFF;
    
    &:hover {
      background-color: #33399b;
    }
  `}

  ${props => props.$variant === 'secondary' && `
    background-color: transparent;
    border: 0.7px solid #565EEF;
    color: #565EEF;
    
    &:hover {
      background-color: #565EEF;
      color: #FFFFFF;
    }
  `}

  & a {
    width: 100%;
    height: 100%;
    color: inherit;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media only screen and (max-width: 375px) {
    width: 100%;
    height: 40px;
    margin-right: 0;
    margin-bottom: ${props => props.$variant === 'primary' ? '10px' : '0'};
  }
`;