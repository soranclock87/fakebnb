
import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import { Routes, Route } from "react-router-dom"
import DetailPage from './pages/DetailPage'
import NewPage from './pages/NewPage'
import Dashboard from './pages/Dashboard'

function App() {
  

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/rooms/:id' element={<DetailPage/>}/>
        <Route path='/new' element={<NewPage/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
