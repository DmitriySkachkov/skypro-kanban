import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../useAuth';
import { useTasks } from '../../useTasks';
import { StyledContainer } from '../../Container.styled';
import Column from '../Column/Column';
import Loading from '../Loading/Loading';
import { statuses } from '../../data';
import { StyledMain, MainBlock, MainContent, ErrorBlock } from './Main.styled';

function Main({ onOpenPopup }) {
  const { isAuth, isLoading: authLoading } = useAuth();
  const { 
    isLoading: tasksLoading, 
    error, 
    getTasksByStatus,
    loadTasks 
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

  return (
    <StyledMain>
      <StyledContainer>
        <MainBlock>
          {tasksLoading ? (
            <Loading />
          ) : (
            <MainContent>
              {statuses.map((status, index) => (
                <Column 
                  key={index} 
                  title={status}
                  cards={getTasksByStatus(status)} // Используем getTasksByStatus вместо прямого доступа к tasks
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