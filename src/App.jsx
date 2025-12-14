import { GlobalStyles } from './GlobalStyles.styled';
import { StyledWrapper } from './Wrapper.styled';
import AppRoutes from './AppRoutes';
import AuthProvider from './AuthProvider';

function App() {
  return (
    <AuthProvider>
      <GlobalStyles />
      <StyledWrapper className="wrapper">
        <AppRoutes />
      </StyledWrapper>
    </AuthProvider>
  );
}

export default App;