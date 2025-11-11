import { useState } from 'react';
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

function Header() {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  const toggleUserMenu = () => {
    setIsUserMenuOpen(!isUserMenuOpen);
  };

  return (
    <StyledHeader>
      <div className="container">
        <HeaderBlock>
          <HeaderLogo className="_show _light">
            <a href="#" target="_self"><img src="/public/logo.png" alt="logo" /></a>
          </HeaderLogo>
          <HeaderLogo className="_dark">
            <a href="#" target="_self"><img src="/public/logo_dark.png" alt="logo" /></a>
          </HeaderLogo>
          <HeaderNav>
            <HeaderButton className="_hover01" id="btnMainNew">
              <a href="#popNewCard">Создать новую задачу</a>
            </HeaderButton>
            <HeaderUser 
              href="#user-set-target"
              className="_hover02"
              onClick={toggleUserMenu}
            >
              Ivan Ivanov
            </HeaderUser>
            <PopUserSet 
              className="pop-user-set"
              id="user-set-target"
              $isOpen={isUserMenuOpen}
            >
              <PopUserName>Ivan Ivanov</PopUserName>
              <PopUserMail>ivan.ivanov@gmail.com</PopUserMail>
              <PopUserTheme>
                <p>Темная тема</p>
                <ThemeCheckbox className="checkbox" name="checkbox" />
              </PopUserTheme>
              <PopUserButton type="button" className="_hover03">
                <a href="#popExit">Выйти</a>
              </PopUserButton>
            </PopUserSet>
          </HeaderNav>					
        </HeaderBlock>
      </div>			
    </StyledHeader>
  );
}

export default Header;