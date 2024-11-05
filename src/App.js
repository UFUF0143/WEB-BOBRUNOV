// Импортируем необходимые компоненты из react-router-dom для маршрутизации
import { BrowserRouter, Route, Routes } from 'react-router-dom'

// Импортируем файл стилей для применения CSS-оформления
import './style/style.css'

// Импортируем компоненты, которые будут отображаться на разных страницах
import Main from './Components/home.js'    // Главная страница
import Catalog from './Components/catalog.js'  // Страница с каталогом
import Quiz from './Components/quiz.js'    // Страница с квизом

// Основной компонент приложения
function App() {
  return (
    // BrowserRouter используется для организации маршрутизации в приложении
    <BrowserRouter>
      {/* Routes служит для определения набора маршрутов */}
      <Routes>
        {/* Определение маршрута для главной страницы, отображает компонент Main */}
        <Route path='/' element={<Main />} />
        
        {/* Определение маршрута для страницы каталога, отображает компонент Catalog */}
        <Route path='/catalog' element={<Catalog />} />
        
        {/* Определение маршрута для страницы с квизом, отображает компонент Quiz */}
        <Route path='/quiz' element={<Quiz />} />
      </Routes>
    </BrowserRouter>
  )
}

// Экспортируем компонент App для использования в других частях приложения
export default App;
