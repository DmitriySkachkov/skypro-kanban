import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../useAuth';
import { getTasks } from '../../services/tasks-api';
import { StyledContainer } from '../../Container.styled';
import Column from '../Column/Column';
import Loading from '../Loading/Loading';
import { statuses } from '../../data';
import { StyledMain, MainBlock, MainContent, ErrorBlock } from './Main.styled';

function Main({ onOpenPopup }) {
  const { isAuth, isLoading: authLoading } = useAuth();
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (!authLoading && !isAuth) {
      navigate('/login');
    }
  }, [isAuth, authLoading, navigate]);  

  const loadTasks = async () => {
    try {
      setIsLoading(true);
      setError('');
      const data = await getTasks();
      setTasks(data.tasks || []);
    } catch (error) {
      console.error('Failed to load tasks:', error);
      setError('Не удалось загрузить задачи. Попробуйте обновить страницу.');
      setTasks([]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (isAuth) {
      loadTasks();
    }
  }, [isAuth]);

  const getTasksByStatus = (status) => {
    return tasks.filter(task => task.status === status);
  };

  const handleCardClick = (card) => {
    onOpenPopup('browse', card);
  };

  const handleRefresh = () => {
    loadTasks();
  };

  if (!isAuth || authLoading) {
    return <Loading />;
  }

  if (error && !isLoading) {
    return (
      <StyledMain>
        <StyledContainer>
          <ErrorBlock>
            <p>{error}</p>
            <button onClick={handleRefresh}>Обновить</button>
          </ErrorBlock>
        </StyledContainer>
      </StyledMain>
    );
  }

  return (
    <StyledMain>
      <StyledContainer>
        <MainBlock>
          {isLoading ? (
            <Loading />
          ) : (
            <MainContent>
              {statuses.map((status, index) => (
                <Column 
                  key={index} 
                  title={status}
                  cards={getTasksByStatus(status)}
                  onCardClick={handleCardClick}
                />
              ))}
            </MainContent>
          )}
        </MainBlock>
      </StyledContainer>
    </StyledMain>
  );
}

export default Main;