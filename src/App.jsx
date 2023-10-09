import { Route, Routes } from 'react-router-dom'
import StarshipList from './components/StarshipList'
import StarshipPage from './components/StarshipPage'
import './App.css'

function App() {
  return (
    <Routes>
      <Route path='/starships' element={<StarshipList />} />
      <Route path='/starships/:starshipName' element={<StarshipPage />} />
    </Routes>
  )
}

export default App
