import { 
  PopupExitOverlay, 
  PopupExitBlock, 
  PopupTitle, 
  PopupForm, 
  PopupExitFormGroup, 
  PopupButton 
} from './PopupExit.styled';

function PopupExit({ isOpen, onClose }) {
  const handleNoClick = (e) => {
    e.preventDefault();
    onClose();
  };

  return (
    <PopupExitOverlay className="pop-exit" $isOpen={isOpen}>
      <PopupExitBlock>
        <PopupTitle>Выйти из аккаунта?</PopupTitle>
        <PopupForm id="formExit" action="#">
          <PopupExitFormGroup>
            <PopupButton $variant="primary" id="exitYes">
              Да, выйти
            </PopupButton>
            <PopupButton $variant="secondary" id="exitNo" onClick={handleNoClick}>
              Нет, остаться
            </PopupButton>
          </PopupExitFormGroup>
        </PopupForm>
      </PopupExitBlock>
    </PopupExitOverlay>
  );
}

export default PopupExit;