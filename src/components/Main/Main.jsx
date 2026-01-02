import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../useAuth';
import { StyledContainer } from '../../Container.styled';
import Column from '../Column/Column';
import Loading from '../Loading/Loading';
import { statuses } from '../../data';
import { StyledMain, MainBlock, MainContent } from './Main.styled';

function Main({ onOpenPopup }) {
  const { isAuth } = useAuth();
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuth) {
      navigate('/login');
    }
  }, [isAuth, navigate]);

  useEffect(() => {
    const loadCards = async () => {
      try {
        await new Promise(resolve => setTimeout(resolve, 2000));
        const { cardsData } = await import('../../data');
        setCards(cardsData);
      } catch (error) {
        console.error('Ошибка загрузки данных:', error);
      } finally {
        setIsLoading(false);
      }
    };

    if (isAuth) {
      loadCards();
    }
  }, [isAuth]);

  const getCardsByStatus = (status) => {
    return cards.filter(card => card.status === status);
  };

  const handleCardClick = (card) => {
    onOpenPopup('browse', card);
  };

  if (!isAuth) {
    return null;
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
                  cards={getCardsByStatus(status)}
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