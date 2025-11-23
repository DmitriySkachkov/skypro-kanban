import { GlobalStyles } from './GlobalStyles.styled';
import { StyledWrapper } from './Wrapper.styled';
import AppRoutes from './AppRoutes';

function App() {
  return (
    <>
      <GlobalStyles />
      <StyledWrapper className="wrapper">
        <AppRoutes />
      </StyledWrapper>
    </>
  );
}

export default App;