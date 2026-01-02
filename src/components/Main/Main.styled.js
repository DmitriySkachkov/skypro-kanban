import styled from 'styled-components';
import { theme } from '../../theme';

export const StyledMain = styled.main`
  width: 100%;
  background-color: ${theme.colors.mainBg};
  flex: 1;
  padding: 40px 0;
`;

export const MainBlock = styled.div`
  width: 100%;
  margin: 0 auto;
`;

export const MainContent = styled.div`
  width: 100%;
  display: flex;
  gap: 26px;
  align-items: flex-start;

  @media screen and (max-width: ${theme.breakpoints.desktop}) {
    display: block;
    overflow-x: auto;
    white-space: nowrap;
    padding-bottom: 20px;
  }
`;

export const ErrorBlock = styled.div`
  text-align: center;
  padding: 40px;
  background-color: ${theme.colors.white};
  border-radius: 10px;
  box-shadow: ${theme.colors.shadow};
  
  p {
    color: ${theme.colors.textPrimary};
    font-size: 16px;
    margin-bottom: 20px;
  }
  
  button {
    padding: 10px 20px;
    background-color: ${theme.colors.primary};
    color: ${theme.colors.white};
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 14px;
    
    &:hover {
      background-color: ${theme.colors.primaryHover};
    }
  }
`;