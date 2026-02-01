import styled from 'styled-components';
import { theme } from '../../theme/theme';

export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 400px;
  width: 100%;
`;

export const LoadingText = styled.p`
  font-size: 18px;
  color: ${theme.colors.textSecondary};
  font-weight: 500;
`;