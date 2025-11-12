import styled from 'styled-components';
import { theme } from '../../common/theme';

export const StyledMain = styled.main`
  width: 100%;
  background-color: ${theme.colors.mainBg};
  flex: 1;
  padding: 40px 0;
`;

export const MainBlock = styled.div`
  width: 100%;
  margin: 0 auto;
`;

export const MainContent = styled.div`
  width: 100%;
  display: flex;
  gap: 26px;
  align-items: flex-start;

  @media screen and (max-width: ${theme.breakpoints.desktop}) {
    display: block;
    overflow-x: auto;
    white-space: nowrap;
    padding-bottom: 20px;
  }
`;