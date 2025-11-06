import './Main.css'
import Column from '../Column/Column'

function Main() {
  const columns = [
    { title: 'Без статуса', color: '' },
    { title: 'Нужно сделать', color: '' },
    { title: 'В работе', color: '' },
    { title: 'Тестирование', color: '' },
    { title: 'Готово', color: '' }
  ]

  return (
    <main className="main">
      <div className="container">
        <div className="main__block">
          <div className="main__content">
            {columns.map((column, index) => (
              <Column key={index} title={column.title} />
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}

export default Main