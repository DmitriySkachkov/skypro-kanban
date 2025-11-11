import styled from 'styled-components';
import { 
  PopupOverlay, 
  PopupBlock, 
  PopupTitle, 
  PopupForm, 
  PopupFormGroup, 
  PopupButton 
} from '../Popup/Popup.styled';

export const PopupExitOverlay = styled(PopupOverlay).attrs({ $zIndex: 5 })``;

export const PopupExitBlock = styled(PopupBlock).attrs({ 
  $maxWidth: '370px',
  $padding: '50px 60px'
})``;

export const PopupExitFormGroup = styled(PopupFormGroup)`
  @media only screen and (max-width: 375px) {
    display: block;
  }
`;