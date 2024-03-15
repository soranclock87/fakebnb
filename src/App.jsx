
import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import { Routes, Route } from "react-router-dom"
import DetailPage from './pages/DetailPage'
import NewPage from './pages/NewPage'
import Dashboard from './pages/Dashboard'
import { useEffect, useState} from 'react'

function App() {
  const [apartments, setApartments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
      const getOneProduct = async () => {
        const res = await fetch(`http://localhost:3000/apartments`);
        const parsed = await res.json();
        setApartments(parsed);
        setLoading(false);
      };
      getOneProduct();
    }, []);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Dashboard apartments={apartments} loading={loading}/>}/>
        <Route path='/apartments/:id' element={<DetailPage/>}/>
        <Route path='/new' element={<NewPage apartments={apartments} setApartments={setApartments} />}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
