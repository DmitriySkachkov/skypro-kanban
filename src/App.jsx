import './App.css'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Popup from './components/Popup/Popup' // Импортируем только главный Popup

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Main />
      <Popup /> {/* Используем только один компонент Popup */}
    </div>
  )
}

export default App