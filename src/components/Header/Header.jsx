import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../useAuth';
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
  const { isAuth, logout } = useAuth(); // Используем хук
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

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
              <HeaderButton className="_hover01" onClick={handleLoginClick}>
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