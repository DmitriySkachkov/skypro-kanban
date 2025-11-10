import { useState, useEffect } from 'react'
import Column from '../Column/Column'
import Loading from '../Loading/Loading'
import { statuses } from '../../data'

function Main() {
  const [cards, setCards] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  // Имитация загрузки данных
  useEffect(() => {
    const loadCards = async () => {
      try {
        // Имитируем загрузку данных с сервера
        await new Promise(resolve => setTimeout(resolve, 2000))
        
        // Импортируем данные
        const { cardsData } = await import('../../data')
        setCards(cardsData)
      } catch (error) {
        console.error('Ошибка загрузки данных:', error)
      } finally {
        setIsLoading(false)
      }
    }

    loadCards()
  }, [])

  // Функция для получения карточек по статусу
  const getCardsByStatus = (status) => {
    return cards.filter(card => card.status === status)
  }

  return (
    <main className="main">
      <div className="container">
        <div className="main__block">
          {isLoading ? (
            <Loading />
          ) : (
            <div className="main__content">
              {statuses.map((status, index) => (
                <Column 
                  key={index} 
                  title={status}
                  cards={getCardsByStatus(status)}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  )
}

export default Main