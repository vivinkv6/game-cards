import './App.css'
import NavBar from './components/NavBar'
import HomePage from './pages/Home'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import PlatformPage from './pages/Platform'
import CategoryPage from './pages/Category'





function App() {

  return (
    <>
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='platform' element={<PlatformPage/>}/>
      <Route path='category' element={<CategoryPage/>}/>
    </Routes>
    </BrowserRouter>
     <NavBar/>
    </>
  )
}

export default App
