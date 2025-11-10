import Card from '../Card/Card';
import { ColumnContainer, ColumnTitle, CardsContainer } from './Column.styled';

function Column({ title, cards = [] }) {
  return (
    <ColumnContainer className="main__column column">
      <ColumnTitle>
        <p>{title}</p>
      </ColumnTitle>
      <CardsContainer className="cards">
        {cards.map(card => (
          <Card 
            key={card.id}
            title={card.title}
            topic={card.topic}
            date={card.date}
          />
        ))}
      </CardsContainer>
    </ColumnContainer>
  );
}

export default Column;