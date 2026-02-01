import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { useTasks } from '../../hooks/useTasks';
import { StyledContainer } from '../../theme/Container.styled';
import Column from '../Column/Column';
import Loading from '../Loading/Loading';
import { StyledMain, MainBlock, MainContent, ErrorBlock } from './Main.styled';

function Main({ onOpenPopup }) {
  const { isAuth, isLoading: authLoading } = useAuth();
  const { 
    isLoading: tasksLoading, 
    error, 
    getTasksByStatus,
    loadTasks,
    tasks 
  } = useTasks();
  
  const navigate = useNavigate();

  useEffect(() => {
    if (!authLoading && !isAuth) {
      navigate('/login');
    }
  }, [isAuth, authLoading, navigate]);

  const handleCardClick = (card) => {
    onOpenPopup('browse', card);
  };

  const handleRefresh = () => {
    loadTasks();
  };

  if (!isAuth || authLoading) {
    return <Loading />;
  }

  if (error && !tasksLoading) {
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

  // Динамически получаем статусы из задач
  const getUniqueStatuses = () => {
    if (!tasks.length) return ['Без статуса'];
    return ['Без статуса', 'Нужно сделать', 'В работе', 'Тестирование', 'Готово'];
  };

  return (
    <StyledMain>
      <StyledContainer>
        <MainBlock>
          {tasksLoading ? (
            <Loading />
          ) : (
            <MainContent>
              {getUniqueStatuses().map((status, index) => (
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