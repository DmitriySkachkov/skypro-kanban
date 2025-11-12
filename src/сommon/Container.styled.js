import styled from 'styled-components';
import { theme } from './theme';

export const StyledContainer = styled.div`
  max-width: 1260px;
  width: 100%;
  margin: 0 auto;
  padding: 0 30px;

  @media screen and (max-width: ${theme.breakpoints.tablet}) {
    padding: 0 16px;
  }
`;