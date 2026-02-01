import { GlobalStyles, StyledWrapper } from './theme';
import AppRoutes from './AppRoutes';
import AuthProvider from './providers/AuthProvider'; 
import TaskProvider from './providers/TaskProvider';

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