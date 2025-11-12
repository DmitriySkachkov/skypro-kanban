import styled from 'styled-components';
import { theme } from '../../../common/theme';

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
  background: ${theme.colors.overlay};
  padding: 40px;
  overflow-y: auto;

  @media screen and (max-width: ${theme.breakpoints.tablet}) {
    padding: 20px;
  }
`;

export const PopupBlock = styled.div`
  display: block;
  margin: 0 auto;
  background-color: ${theme.colors.white};
  max-width: ${props => props.$maxWidth || '370px'};
  width: 100%;
  padding: ${props => props.$padding || '50px 60px'};
  border-radius: 10px;
  border: 0.7px solid ${theme.colors.border};
  box-shadow: ${theme.colors.shadow};
  position: relative;

  @media screen and (max-width: ${theme.breakpoints.tablet}) {
    padding: 30px 20px;
  }
`;