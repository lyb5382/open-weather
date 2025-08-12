import './App.css'
import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import About from './page/About'
import Board from './page/Board'
import Home from './page/Home'
import Notfound from './page/Notfound'
import BoardDetail from './page/BoardDetail'

function App() {

  return (
    <div>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/board' element={<Board />} />
        <Route path='/board/:id' element={<BoardDetail />} />
        <Route path='*' element={<Notfound />} />
      </Routes>
    </div>
  )
}

export default App
