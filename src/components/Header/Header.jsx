import { useState } from 'react';
import {
  StyledHeader,
  HeaderBlock,
  HeaderLogo,
  HeaderNav,
  HeaderButton,
  HeaderUser,
  PopUserSet
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
              isOpen={isUserMenuOpen}
            >
              <p className="pop-user-set__name">Ivan Ivanov</p>
              <p className="pop-user-set__mail">ivan.ivanov@gmail.com</p>
              <div className="pop-user-set__theme">
                <p>Темная тема</p>
                <input type="checkbox" className="checkbox" name="checkbox" />
              </div>
              <button type="button" className="_hover03">
                <a href="#popExit">Выйти</a>
              </button>
            </PopUserSet>
          </HeaderNav>					
        </HeaderBlock>
      </div>			
    </StyledHeader>
  );
}

export default Header;