import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './style/style.css';
import Main from './Components/home.js'
import Catalog from './Components/catalog.js'
import Quiz from './Components/quiz.js'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/catalog' element={<Catalog />} />
        <Route path='/quiz' element={<Quiz />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App;
