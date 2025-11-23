import styled from 'styled-components';
import { PopupOverlay, PopupBlock } from '../Popup/Popup.styled';
import { theme } from '../../theme';

export const PopupBrowseOverlay = styled(PopupOverlay).attrs({ $zIndex: 7 })`
  @media screen and (max-width: ${theme.breakpoints.laptop}) {
    top: 70px;
  }

  @media screen and (max-width: ${theme.breakpoints.tablet}) {
    padding: 0;
    justify-content: flex-start;
  }
`;

export const PopupBrowseBlock = styled(PopupBlock).attrs({ 
  $maxWidth: '630px',
  $padding: '40px 30px 38px'
})`
  @media screen and (max-width: ${theme.breakpoints.laptop}) {
    border-radius: 0;
  }

  @media screen and (max-width: ${theme.breakpoints.tablet}) {
    padding: 20px 16px 32px;
  }
`;

export const PopupBrowseContent = styled.div`
  display: block;
  text-align: left;

  .theme-down {
    display: none;
    margin-bottom: 20px;
  }

  .theme-top {
    display: block;
  }

  @media screen and (max-width: ${theme.breakpoints.tablet}) {
    .theme-down {
      display: block;
      margin-bottom: 20px;
    }

    .theme-top {
      display: none;
    }
  }
`;

export const PopupBrowseTopBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px;
`;

export const PopupBrowseTitle = styled.h3`
  color: ${theme.colors.textPrimary};
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
`;

export const PopupBrowseWrap = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  @media screen and (max-width: ${theme.breakpoints.laptop}) {
    display: block;
  }
`;

export const PopupBrowseForm = styled.form`
  max-width: 370px;
  width: 100%;
  display: block;
  margin-bottom: 20px;

  @media screen and (max-width: ${theme.breakpoints.tablet}) {
    max-width: 100%;
  }
`;

export const FormBrowseBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FormBrowseArea = styled.textarea`
  max-width: 370px;
  width: 100%;
  outline: none;
  padding: 14px;
  background: #EAEEF6;
  border: 0.7px solid ${theme.colors.borderLight};
  border-radius: 8px;
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;
  margin-top: 14px;
  height: 200px;
  resize: none;

  &::placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 1px;
    color: ${theme.colors.textSecondary};
    letter-spacing: -0.14px;
  }

  @media screen and (max-width: ${theme.breakpoints.tablet}) {
    max-width: 100%;
    height: 37px;
  }
`;

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

  & div {
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

  & div {
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

export const PopupBrowseButtons = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;

  & button {
    height: 30px;
    margin-bottom: 10px;
    padding: 0 14px;
  }

  .btn-group button {
    margin-right: 8px;
  }

  @media screen and (max-width: ${theme.breakpoints.tablet}) {
    & button {
      width: 100%;
      height: 40px;
    }

    .btn-group {
      width: 100%;

      button {
        margin-right: 0px;
      }
    }
  }
`;