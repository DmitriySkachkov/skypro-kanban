import styled from 'styled-components';
import { theme } from '../../theme';

export const ColumnContainer = styled.div`
  width: 100%;
  max-width: 220px;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: ${theme.breakpoints.desktop}) {
    display: inline-block;
    vertical-align: top;
    margin-right: 26px;
    max-width: 220px;
  }

  @media screen and (max-width: ${theme.breakpoints.tablet}) {
    max-width: 200px;
  }
`;

export const ColumnTitle = styled.div`
  padding: 0 10px;
  margin: 15px 0;

  & p {
    color: ${theme.colors.textSecondary};
    font-size: 14px;
    font-weight: 600;
    line-height: 1;
    text-transform: uppercase;
  }
`;

export const CardsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media screen and (max-width: ${theme.breakpoints.desktop}) {
    display: block;
    width: 100%;
  }
`;