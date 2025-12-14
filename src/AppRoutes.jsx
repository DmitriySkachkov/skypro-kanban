import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './useAuth';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import AddTaskPage from './pages/AddTaskPage';
import EditTaskPage from './pages/EditTaskPage';
import ViewTaskPage from './pages/ViewTaskPage';
import NotFoundPage from './pages/NotFoundPage';

const ProtectedRoute = ({ children }) => {
  const { isAuth } = useAuth(); 
  return isAuth ? children : <Navigate to="/login" />;
};

const PublicRoute = ({ children }) => {
  const { isAuth } = useAuth(); 
  return !isAuth ? children : <Navigate to="/" />;
};

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={
        <ProtectedRoute>
          <HomePage />
        </ProtectedRoute>
      } />
      
      <Route path="/login" element={
        <PublicRoute>
          <LoginPage />
        </PublicRoute>
      } />
      
      <Route path="/register" element={
        <PublicRoute>
          <RegisterPage />
        </PublicRoute>
      } />
      
      <Route path="/add-task" element={
        <ProtectedRoute>
          <AddTaskPage />
        </ProtectedRoute>
      } />
      
      <Route path="/edit-task/:id" element={
        <ProtectedRoute>
          <EditTaskPage />
        </ProtectedRoute>
      } />
      
      <Route path="/task/:id" element={
        <ProtectedRoute>
          <ViewTaskPage />
        </ProtectedRoute>
      } />
      
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default AppRoutes;