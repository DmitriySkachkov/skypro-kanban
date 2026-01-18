import styled from 'styled-components';
import { theme } from '../../theme/theme';

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

export const PopupTitle = styled.h2`
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  line-height: 30px;
  letter-spacing: -0.4px;
  margin-bottom: 20px;
  color: ${theme.colors.textPrimary};
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

  & a {
    width: 100%;
    height: 100%;
    color: inherit;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media only screen and (max-width: ${theme.breakpoints.mobile}) {
    width: 100%;
    height: 40px;
    margin-right: 0;
    margin-bottom: ${props => props.$variant === 'primary' ? '10px' : '0'};
  }
`;

// Дополнительные компоненты для календаря и категорий
export const Subtitle = styled.p`
  color: ${theme.colors.textPrimary};
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
`;

export const Calendar = styled.div`
  max-width: 182px;
  margin-bottom: 20px;

  @media screen and (max-width: ${theme.breakpoints.laptop}) {
    max-width: 100%;
  }
`;

export const CalendarTitle = styled.div`
  margin-bottom: 14px;
`;

export const CalendarText = styled.p`
  color: ${theme.colors.textPrimary};
  font-size: 10px;
  line-height: 1;
`;

export const CalendarBlock = styled.div`
  display: block;
`;

export const CalendarMonth = styled.span`
  color: ${theme.colors.textPrimary};
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
  margin-bottom: 7px;
  padding: 0 7px;
`;

export const CalendarDayName = styled.span`
  color: ${theme.colors.textSecondary};
  font-size: 10px;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.2px;
  text-transform: uppercase;
  width: 22px;
  text-align: center;
`;

export const CalendarCells = styled.div`
  width: 182px;
  height: 126px;
  display: flex;
  flex-wrap: wrap;
`;

export const CalendarCell = styled.span`
  width: 22px;
  height: 22px;
  margin: 2px;
  border-radius: 50%;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  color: ${theme.colors.textPrimary};
  font-size: 10px;
  line-height: 1;
  letter-spacing: -0.2px;
  cursor: pointer;

  ${props => props.$otherMonth && `
    opacity: 0;
  `}

  ${props => props.$isDay && `
    opacity: 1;
  `}

  ${props => props.$current && `
    background-color: ${theme.colors.primary};
    color: ${theme.colors.white};
  `}

  ${props => props.$active && `
    background-color: ${theme.colors.orange.background};
    color: ${theme.colors.orange.text};
  `}
`;

export const CalendarNav = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
`;

export const CalendarPeriod = styled.div`
  padding: 0 7px;
`;

export const NavActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NavAction = styled.button`
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: none;
  color: ${theme.colors.primary};
  font-size: 16px;
  cursor: pointer;
`;

export const Categories = styled.div`
  margin-bottom: 11px;
`;

export const CategoriesText = styled.p`
  margin-bottom: 14px;
`;

export const CategoriesThemes = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const CategoriesTheme = styled.div`
  border-radius: 24px;
  border: 0.7px solid ${theme.colors.borderLight};
  color: ${props => props.$color === 'orange' ? theme.colors.orange.text : 
                    props.$color === 'green' ? theme.colors.green.text : 
                    theme.colors.purple.text};
  background-color: ${props => props.$color === 'orange' ? theme.colors.orange.background : 
                            props.$color === 'green' ? theme.colors.green.background : 
                            theme.colors.purple.background};
  padding: 11px 14px 10px;
  margin-right: 7px;
  margin-bottom: 7px;

  & p {
    font-size: 14px;
    line-height: 1;
    letter-spacing: -0.14px;
  }

  ${props => props.$active && `
    opacity: 1;
  `}
`;

export const Status = styled.div`
  margin-bottom: 11px;
`;

export const StatusText = styled.p`
  margin-bottom: 14px;
`;

export const StatusThemes = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const StatusTheme = styled.div`
  border-radius: 24px;
  border: 0.7px solid ${theme.colors.borderLight};
  color: ${theme.colors.textSecondary};
  padding: 11px 14px 10px;
  margin-right: 7px;
  margin-bottom: 7px;

  & p {
    font-size: 14px;
    line-height: 1;
    letter-spacing: -0.14px;
  }

  ${props => props.$gray && `
    background: ${theme.colors.gray.background};
    color: ${theme.colors.gray.text};
  `}

  ${props => props.$hide && `
    display: none;
  `}
`;