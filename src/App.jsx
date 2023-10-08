import { Route, Routes } from 'react-router-dom'
import StarshipList from './components/StarshipList'
import './App.css'

function App() {
  return (
    <Routes>
      <Route path='/starships' element={<StarshipList />} />
    </Routes>
  )
}

export default App
