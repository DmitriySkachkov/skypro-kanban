import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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

function Header() {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    localStorage.setItem('isAuth', 'true');
    navigate('/');
  };

  const handleLogout = () => {
    localStorage.removeItem('isAuth');
    navigate('/login');
  };

  const isAuth = localStorage.getItem('isAuth');

  if (!isAuth) {
    return (
      <StyledHeader>
        <StyledContainer>
          <HeaderBlock>
            <HeaderLogo>
              <a href="#" target="_self">
                <img src="/logo.png" alt="logo" />
              </a>
            </HeaderLogo>
            <HeaderNav>
              <HeaderButton className="_hover01" onClick={handleLogin}>
                Войти
              </HeaderButton>
            </HeaderNav>
          </HeaderBlock>
        </StyledContainer>
      </StyledHeader>
    );
  }

  return (
    <StyledHeader>
      <StyledContainer>
        <HeaderBlock>
          <HeaderLogo>
            <a href="#" target="_self">
              <img src="/logo.png" alt="logo" />
            </a>
          </HeaderLogo>
          <HeaderNav>
            <HeaderButton className="_hover01" onClick={() => navigate('/add-task')}>
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
                <ThemeCheckbox className="checkbox" name="checkbox" />
              </PopUserTheme>
              <PopUserButton type="button" className="_hover03" onClick={handleLogout}>
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