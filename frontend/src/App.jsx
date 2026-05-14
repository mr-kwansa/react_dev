import './App.css'
import Home from './pages/Home'
import Favorite from './pages/Favorite'
import { Routes,Route } from 'react-router-dom'
import Navbar from './components/Navbar'
function App() {

  return (
    <div className="App">
      <Navbar />
       <main className='main-content md:ml-64'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/favorite' element={<Favorite />} />
        </Routes>
      </main>
    </div>
   
  )
}
export default App
