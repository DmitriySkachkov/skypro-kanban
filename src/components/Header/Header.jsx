import { useState } from 'react';
import { StyledContainer } from '../../Container.styled';
import {
  StyledHeader,
  HeaderBlock,
  HeaderLogo,
  HeaderNav,
  HeaderButton,
  HeaderUser,
  PopUserSet,
  PopUserName,
  PopUserMail,
  PopUserTheme,
  ThemeCheckbox,
  PopUserButton
} from './Header.styled';

function Header({ onOpenPopup }) {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const handleThemeToggle = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <StyledHeader>
      <StyledContainer>
        <HeaderBlock>
          <HeaderLogo>
            {isDarkTheme ? (
              <a href="#" target="_self">
                <img src="/logo_dark.png" alt="logo" />
              </a>
            ) : (
              <a href="#" target="_self">
                <img src="/logo.png" alt="logo" />
              </a>
            )}
          </HeaderLogo>
          <HeaderNav>
            <HeaderButton className="_hover01" onClick={() => onOpenPopup('newCard')}>
              Создать новую задачу
            </HeaderButton>
            <HeaderUser 
              className="_hover02"
              onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
            >
              Ivan Ivanov
            </HeaderUser>
            <PopUserSet $isOpen={isUserMenuOpen}>
              <PopUserName>Ivan Ivanov</PopUserName>
              <PopUserMail>ivan.ivanov@gmail.com</PopUserMail>
              <PopUserTheme>
                <div>Темная тема</div>
                <ThemeCheckbox 
                  className="checkbox" 
                  name="checkbox" 
                  checked={isDarkTheme}
                  onChange={handleThemeToggle}
                />
              </PopUserTheme>
              <PopUserButton type="button" className="_hover03" onClick={() => onOpenPopup('exit')}>
                Выйти
              </PopUserButton>
            </PopUserSet>
          </HeaderNav>					
        </HeaderBlock>
      </StyledContainer>
    </StyledHeader>
  );
}

export default Header;