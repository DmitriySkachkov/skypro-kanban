import styled from 'styled-components';
import { theme } from '../../theme';

export const CardItem = styled.div`
  padding: 5px;
  animation-name: card-animation;
  animation-duration: 500ms;
  animation-timing-function: linear;
`;

export const CardContainer = styled.div`
  width: 220px;
  height: 130px;
  background-color: ${theme.colors.cardBg};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: stretch;
  padding: 15px 13px 19px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-2px);
  }
`;

export const CardGroup = styled.div`
  width: 100%;
  height: 20px;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CardTheme = styled.div`
  width: auto;
  height: 20px;
  padding: 5px 14px;
  border-radius: 18px;
  background-color: ${props => {
    switch (props.$theme) {
      case 'orange': return theme.colors.orange.background;
      case 'green': return theme.colors.green.background;
      case 'purple': return theme.colors.purple.background;
      default: return theme.colors.orange.background;
    }
  }};
  color: ${props => {
    switch (props.$theme) {
      case 'orange': return theme.colors.orange.text;
      case 'green': return theme.colors.green.text;
      case 'purple': return theme.colors.purple.text;
      default: return theme.colors.orange.text;
    }
  }};

  & div {
    font-size: 10px;
    font-weight: 600;
    line-height: 10px;
  }
`;

export const CardButton = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 2px;
  cursor: pointer;

  & div {
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background-color: ${theme.colors.textSecondary};
  }
`;

export const CardContent = styled.div`
  height: 64px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

export const CardTitle = styled.h3`
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  color: ${theme.colors.textPrimary};
  margin-bottom: 10px;
`;

export const CardDate = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  & svg {
    width: 13px;
  }

  & div {
    margin-left: 6px;
    font-size: 10px;
    line-height: 13px;
    color: ${theme.colors.textSecondary};
    letter-spacing: 0.2px;
  }
`;