import styled from 'styled-components';
import { theme } from '../../theme';

export const StyledHeader = styled.header`
  width: 100%;
  margin: 0 auto;
  background-color: ${theme.colors.headerBg};
  padding: 0;
  position: relative;
`;

export const HeaderBlock = styled.div`
  height: 70px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  position: relative;
  top: 0;
  left: 0;
  padding: 0;
`;

export const HeaderLogo = styled.div`
  & img {
    width: 85px;
  }
`;

export const HeaderNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  position: relative;
`;

export const HeaderButton = styled.button`
  width: 178px;
  height: 30px;
  border-radius: 4px;
  background-color: ${theme.colors.primary};
  color: ${theme.colors.white};
  border: none;
  font-size: 14px;
  line-height: 1;
  font-weight: 500;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${theme.colors.primaryHover};
  }
`;

export const HeaderUser = styled.div`
  height: 20px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  line-height: 20px;
  color: ${theme.colors.primary};
  transition: color 0.2s ease;
  position: relative;
  cursor: pointer;

  &:hover {
    color: ${theme.colors.primaryHover};

    &::after {
      border-left-color: ${theme.colors.primaryHover};
      border-bottom-color: ${theme.colors.primaryHover};
    }
  }

  &::after {
    content: "";
    display: block;
    width: 6px;
    height: 6px;
    border-radius: 1px;
    border-left: 1.9px solid ${theme.colors.primary};
    border-bottom: 1.9px solid ${theme.colors.primary};
    transform: rotate(-45deg);
    margin: -6px 0 0 5px;
    padding: 0;
    transition: border-color 0.2s ease;
  }
`;

export const PopUserSet = styled.div`
  display: ${props => props.$isOpen ? 'block' : 'none'};
  position: absolute;
  top: 61px;
  right: 0;
  width: 213px;
  height: 205px;
  border-radius: 10px;
  border: 0.7px solid ${theme.colors.borderLight};
  background: ${theme.colors.white};
  box-shadow: ${theme.colors.shadow};
  padding: 34px;
  text-align: center;
  z-index: 2;
`;

export const PopUserName = styled.p`
  color: ${theme.colors.textPrimary};
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
  letter-spacing: -0.14px;
  margin-bottom: 4px;
`;

export const PopUserMail = styled.p`
  color: ${theme.colors.textSecondary};
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.14px;
  margin-bottom: 10px;
`;

export const PopUserTheme = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;

  & p {
    color: ${theme.colors.textPrimary};
    font-size: 14px;
    line-height: 21px;
    letter-spacing: -0.14px;
  }
`;

export const ThemeCheckbox = styled.input.attrs({ type: 'checkbox' })`
  position: relative;
  width: 24px;
  height: 13px;
  border-radius: 100px;
  background: #EAEEF6;
  outline: none;
  appearance: none;

  &::before {
    content: "";
    position: absolute;
    top: 1px;
    left: 1px;
    width: 11px;
    height: 11px;
    border-radius: 50%;
    background-color: ${theme.colors.textSecondary};
    transition: 0.5s;
  }

  &:checked::before {
    left: 12px;
  }
`;

export const PopUserButton = styled.button`
  width: 72px;
  height: 30px;
  background: transparent;
  color: ${theme.colors.primary};
  border-radius: 4px;
  border: 1px solid ${theme.colors.primary};
  transition: all 0.2s ease;

  &:hover {
    background-color: ${theme.colors.primary};
    color: ${theme.colors.white};
  }
`;