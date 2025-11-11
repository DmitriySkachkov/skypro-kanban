import styled from 'styled-components';
import { PopupOverlay, PopupBlock } from '../Popup/Popup.styled';

export const PopupBrowseOverlay = styled(PopupOverlay).attrs({ $zIndex: 7 })`
  @media screen and (max-width: 660px) {
    top: 70px;
  }

  @media screen and (max-width: 495px) {
    padding: 0;
    justify-content: flex-start;
  }
`;

export const PopupBrowseBlock = styled(PopupBlock).attrs({ 
  $maxWidth: '630px',
  $padding: '40px 30px 38px'
})`
  @media screen and (max-width: 660px) {
    border-radius: 0;
  }

  @media screen and (max-width: 495px) {
    padding: 20px 16px 32px;
  }
`;

export const PopupBrowseContent = styled.div`
  display: block;
  text-align: left;

  .theme-down {
    display: none;
    margin-bottom: 20px;
  }

  .theme-top {
    display: block;
  }

  @media screen and (max-width: 495px) {
    .theme-down {
      display: block;
      margin-bottom: 20px;
    }

    .theme-top {
      display: none;
    }
  }
`;

export const PopupBrowseTopBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px;
`;

export const PopupBrowseTitle = styled.h3`
  color: #000;
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
`;

export const PopupBrowseWrap = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  @media screen and (max-width: 660px) {
    display: block;
  }
`;

export const PopupBrowseForm = styled.form`
  max-width: 370px;
  width: 100%;
  display: block;
  margin-bottom: 20px;

  @media screen and (max-width: 495px) {
    max-width: 100%;
  }
`;

export const FormBrowseBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FormBrowseArea = styled.textarea`
  max-width: 370px;
  width: 100%;
  outline: none;
  padding: 14px;
  background: #EAEEF6;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  border-radius: 8px;
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;
  margin-top: 14px;
  height: 200px;
  resize: none;

  &::placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 1px;
    color: #94A6BE;
    letter-spacing: -0.14px;
  }

  @media screen and (max-width: 495px) {
    max-width: 100%;
    height: 37px;
  }
`;

export const Status = styled.div`
  margin-bottom: 11px;
`;

export const StatusText = styled.p`
  margin-bottom: 14px;
`;

export const StatusThemes = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const StatusTheme = styled.div`
  border-radius: 24px;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  color: #94A6BE;
  padding: 11px 14px 10px;
  margin-right: 7px;
  margin-bottom: 7px;

  & p {
    font-size: 14px;
    line-height: 1;
    letter-spacing: -0.14px;
  }

  ${props => props.$gray && `
    background: #94A6BE;
    color: #FFFFFF;
  `}

  ${props => props.$hide && `
    display: none;
  `}
`;

export const PopupBrowseButtons = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;

  & button {
    height: 30px;
    margin-bottom: 10px;
    padding: 0 14px;
  }

  .btn-group button {
    margin-right: 8px;
  }

  @media screen and (max-width: 495px) {
    & button {
      width: 100%;
      height: 40px;
    }

    .btn-group {
      width: 100%;

      button {
        margin-right: 0px;
      }
    }
  }
`;