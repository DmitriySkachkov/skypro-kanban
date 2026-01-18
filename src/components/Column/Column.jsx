import Card from '../Card/Card';
import { ColumnContainer, ColumnTitle, CardsContainer } from './Column.styled';

function Column({ title, cards = [], onCardClick }) {
  return (
    <ColumnContainer className="column">
      <ColumnTitle>
        <p>{title}</p>
      </ColumnTitle>
      <CardsContainer className="cards">
        {cards.map(card => (
          <Card 
            key={card._id || card.id}
            card={card}
            onCardClick={onCardClick}
          />
        ))}
      </CardsContainer>
    </ColumnContainer>
  );
}

export default Column;