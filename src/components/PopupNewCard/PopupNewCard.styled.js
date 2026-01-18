import styled from 'styled-components';
import { PopupOverlay, PopupBlock } from '../Popup/Popup.styled';
import { theme } from '../../theme';

export const PopupNewCardOverlay = styled(PopupOverlay).attrs({ $zIndex: 6 })`
  @media screen and (max-width: ${theme.breakpoints.laptop}) {
    top: 70px;
  }

  @media screen and (max-width: ${theme.breakpoints.tablet}) {
    padding: 0;
    justify-content: flex-start;
  }
`;

export const PopupNewCardBlock = styled(PopupBlock).attrs({ 
  $maxWidth: '630px',
  $padding: '40px 30px 48px'
})`
  @media screen and (max-width: ${theme.breakpoints.laptop}) {
    border-radius: 0;
  }

  @media screen and (max-width: ${theme.breakpoints.tablet}) {
    padding: 20px 16px 32px;
  }
`;

export const PopupNewCardContent = styled.div`
  display: block;
  text-align: left;
`;

export const PopupNewCardTitle = styled.h3`
  color: ${theme.colors.textPrimary};
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  margin-bottom: 20px;
`;

export const PopupNewCardClose = styled.a`
  position: absolute;
  top: 20px;
  right: 30px;
  color: ${theme.colors.textSecondary};
  cursor: pointer;
  text-decoration: none;
  font-size: 18px;

  &:hover {
    color: ${theme.colors.textPrimary};
  }
`;

export const PopupNewCardWrap = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  @media screen and (max-width: ${theme.breakpoints.laptop}) {
    display: block;
  }
`;

export const PopupNewCardForm = styled.form`
  max-width: 370px;
  width: 100%;
  display: block;
  margin-bottom: 20px;

  @media screen and (max-width: ${theme.breakpoints.tablet}) {
    max-width: 100%;
  }
`;

export const FormNewBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FormNewInput = styled.input`
  width: 100%;
  outline: none;
  padding: 14px;
  background: transparent;
  border: 0.7px solid ${theme.colors.borderLight};
  border-radius: 8px;
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;
  margin: 20px 0;

  &::placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 1px;
    color: ${theme.colors.textSecondary};
    letter-spacing: -0.14px;
  }
`;

export const FormNewArea = styled.textarea`
  width: 100%;
  outline: none;
  padding: 14px;
  background: transparent;
  border: 0.7px solid ${theme.colors.borderLight};
  border-radius: 8px;
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;
  margin-top: 14px;
  height: 200px;
  resize: vertical;

  &::placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 1px;
    color: ${theme.colors.textSecondary};
    letter-spacing: -0.14px;
  }

  @media screen and (max-width: ${theme.breakpoints.tablet}) {
    max-width: 100%;
    height: 34px;
  }
`;

export const FormNewCreate = styled.button`
  width: 132px;
  height: 30px;
  background-color: ${theme.colors.primary};
  border-radius: 4px;
  border: 0;
  outline: none;
  font-size: 14px;
  font-weight: 500;
  line-height: 1;
  color: ${theme.colors.white};
  float: right;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${theme.colors.primaryHover};
  }

  @media screen and (max-width: ${theme.breakpoints.tablet}) {
    width: 100%;
    height: 40px;
  }
`;

export const Subtitle = styled.p`
  color: ${theme.colors.textPrimary};
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
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

export const Status = styled.div`
  margin-bottom: 20px;
`;

export const StatusText = styled.p`
  margin-bottom: 14px;
`;

export const StatusThemes = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 8px;
`;

export const StatusTheme = styled.div`
  border-radius: 24px;
  border: 0.7px solid ${theme.colors.borderLight};
  color: ${theme.colors.textSecondary};
  padding: 8px 14px;
  cursor: pointer;
  transition: all 0.2s ease;

  ${props => props.$active && `
    background-color: ${theme.colors.primary};
    color: ${theme.colors.white};
    border-color: ${theme.colors.primary};
  `}

  &:hover {
    background-color: ${theme.colors.primary}20;
  }

  & div {
    font-size: 14px;
    line-height: 1;
    letter-spacing: -0.14px;
  }
`;

export const Calendar = styled.div`
  width: 182px;
  margin-bottom: 20px;

  @media screen and (max-width: ${theme.breakpoints.laptop}) {
    max-width: 340px;
    width: 100%;
  }

  @media screen and (max-width: ${theme.breakpoints.tablet}) {
    width: 100%;
  }
`;

export const CalendarTitle = styled.p`
  margin-bottom: 14px;
  padding: 0 7px;
`;

export const CalendarText = styled.p`
  color: ${theme.colors.textSecondary};
  font-size: 10px;
  line-height: 1;

  & span {
    color: ${theme.colors.textPrimary};
  }

  @media screen and (max-width: ${theme.breakpoints.laptop}) {
    font-size: 14px;
  }
`;

export const CalendarBlock = styled.div`
  display: block;
`;

export const CalendarMonth = styled.div`
  color: ${theme.colors.textSecondary};
  font-size: 14px;
  line-height: 25px;
  font-weight: 600;
`;

export const CalendarContent = styled.div`
  margin-bottom: 12px;
`;

export const CalendarDaysNames = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  margin: 7px 0;
  padding: 0 7px;
`;

export const CalendarDayName = styled.div`
  color: ${theme.colors.textSecondary};
  font-size: 10px;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.2px;

  @media screen and (max-width: ${theme.breakpoints.laptop}) {
    font-size: 14px;
  }
`;

export const CalendarCells = styled.div`
  width: 182px;
  height: 126px;
  display: flex;
  flex-wrap: wrap;

  @media screen and (max-width: ${theme.breakpoints.laptop}) {
    width: 344px;
    height: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
`;

export const CalendarCell = styled.div`
  width: 22px;
  height: 22px;
  margin: 2px;
  border-radius: 50%;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  color: ${theme.colors.textSecondary};
  font-size: 10px;
  line-height: 1;
  letter-spacing: -0.2px;
  cursor: pointer;

  ${props => props.$otherMonth && `
    opacity: 0;
  `}

  ${props => props.$isDay && `
    &:hover {
      color: ${theme.colors.textSecondary};
      background-color: #EAEEF6;
    }
  `}

  ${props => props.$active && `
    background-color: ${theme.colors.textSecondary};
    color: #FFFFFF;
  `}

  ${props => props.$current && `
    font-weight: 700;
  `}

  @media screen and (max-width: ${theme.breakpoints.laptop}) {
    width: 42px;
    height: 42px;
    font-size: 14px;
  }
`;

export const CalendarNav = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 14px;
  padding: 0 7px;
`;

export const CalendarPeriod = styled.div`
  padding: 0 7px;
`;

export const NavActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NavAction = styled.div`
  width: 18px;
  height: 25px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  & svg {
    fill: ${theme.colors.textSecondary};
  }
`;

export const Categories = styled.div`
  margin-bottom: 20px;
`;

export const CategoriesThemes = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 8px;
`;

export const CategoriesText = styled.p`
  margin-bottom: 14px;
`;

export const CategoriesTheme = styled.div`
  display: inline-block;
  width: auto;
  height: 30px;
  padding: 8px 20px;
  border-radius: 24px;
  opacity: ${props => props.$active ? '1' : '0.4'};
  background-color: ${props => {
    switch (props.$color) {
      case 'orange': return theme.colors.orange.background;
      case 'green': return theme.colors.green.background;
      case 'purple': return theme.colors.purple.background;
      default: return theme.colors.orange.background;
    }
  }};
  color: ${props => {
    switch (props.$color) {
      case 'orange': return theme.colors.orange.text;
      case 'green': return theme.colors.green.text;
      case 'purple': return theme.colors.purple.text;
      default: return theme.colors.orange.text;
    }
  }};
  cursor: pointer;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.8;
  }

  & div {
    font-size: 14px;
    font-weight: 600;
    line-height: 14px;
    white-space: nowrap;
  }
`;