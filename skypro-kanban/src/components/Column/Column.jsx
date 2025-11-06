import './Column.css'
import Card from '../Card/Card'

function Column({ title }) {
  // Временные данные для демонстрации
  const cards = [
    { id: 1, title: 'Название задачи', theme: 'orange', category: 'Web Design', date: '30.10.23' },
    { id: 2, title: 'Название задачи', theme: 'green', category: 'Research', date: '30.10.23' },
    { id: 3, title: 'Название задачи', theme: 'purple', category: 'Copywriting', date: '30.10.23' }
  ]

  return (
    <div className="main__column column">
      <div className="column__title">
        <p>{title}</p>
      </div>
      <div className="cards">
        {cards.map(card => (
          <Card 
            key={card.id}
            title={card.title}
            theme={card.theme}
            category={card.category}
            date={card.date}
          />
        ))}
      </div>
    </div>
  )
}

export default Column