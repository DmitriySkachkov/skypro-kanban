import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import AddTaskPage from './pages/AddTaskPage';
import EditTaskPage from './pages/EditTaskPage';
import ViewTaskPage from './pages/ViewTaskPage';
import NotFoundPage from './pages/NotFoundPage';

const ProtectedRoute = ({ children }) => {
  const isAuth = localStorage.getItem('isAuth');
  return isAuth ? children : <Navigate to="/login" />;
};

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={
        <ProtectedRoute>
          <HomePage />
        </ProtectedRoute>
      } />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
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