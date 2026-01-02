import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../useAuth';
import { 
  PopupExitOverlay, 
  PopupExitBlock, 
  PopupExitTitle, 
  PopupExitForm, 
  PopupExitFormGroup, 
  PopupExitButton 
} from './PopupExit.styled';

function PopupExit({ isOpen, onClose }) {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleYesClick = (e) => {
    e.preventDefault();
    logout();
    onClose();
    navigate('/login');
  };

  const handleNoClick = (e) => {
    e.preventDefault();
    onClose();
  };

  return (
    <PopupExitOverlay className="pop-exit" $isOpen={isOpen}>
      <PopupExitBlock>
        <PopupExitTitle>Выйти из аккаунта?</PopupExitTitle>
        <PopupExitForm id="formExit" action="#">
          <PopupExitFormGroup>
            <PopupExitButton 
              $variant="primary" 
              id="exitYes" 
              onClick={handleYesClick}
            >
              Да, выйти
            </PopupExitButton>
            <PopupExitButton 
              $variant="secondary" 
              id="exitNo" 
              onClick={handleNoClick}
            >
              Нет, остаться
            </PopupExitButton>
          </PopupExitFormGroup>
        </PopupExitForm>
      </PopupExitBlock>
    </PopupExitOverlay>
  );
}

export default PopupExit;