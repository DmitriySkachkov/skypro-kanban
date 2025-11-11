import { 
  PopupExitOverlay, 
  PopupExitBlock, 
  PopupTitle, 
  PopupForm, 
  PopupExitFormGroup, 
  PopupButton 
} from './PopupExit.styled';

function PopupExit() {
  return (
    <PopupExitOverlay className="pop-exit" id="popExit" $isOpen={false}>
      <PopupExitBlock>
        <PopupTitle>Выйти из аккаунта?</PopupTitle>
        <PopupForm id="formExit" action="#">
          <PopupExitFormGroup>
            <PopupButton $variant="primary" id="exitYes">
              <a href="#exit">Да, выйти</a>
            </PopupButton>
            <PopupButton $variant="secondary" id="exitNo">
              <a href="#stay">Нет, остаться</a>
            </PopupButton>
          </PopupExitFormGroup>
        </PopupForm>
      </PopupExitBlock>
    </PopupExitOverlay>
  );
}

export default PopupExit;