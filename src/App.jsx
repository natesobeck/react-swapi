import { Route, Routes } from 'react-router-dom'
import StarshipList from './components/StarshipList'
import StarshipPage from './components/StarshipPage'
import Nav from './components/Nav'
import './App.css'

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={<StarshipList />} />
        <Route path='/starships' element={<StarshipList />} />
        <Route path='/starships/:starshipName' element={<StarshipPage />} />
      </Routes>
    </>
  )
}

export default App
