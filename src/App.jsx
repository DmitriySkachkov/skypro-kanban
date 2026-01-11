import { GlobalStyles } from './GlobalStyles.styled';
import { StyledWrapper } from './Wrapper.styled';
import AppRoutes from './AppRoutes';
import AuthProvider from './AuthProvider';
import TaskProvider from './TaskProvider';

function App() {
  return (
    <AuthProvider>
      <TaskProvider>
        <GlobalStyles />
        <StyledWrapper className="wrapper">
          <AppRoutes />
        </StyledWrapper>
      </TaskProvider>
    </AuthProvider>
  );
}

export default App;