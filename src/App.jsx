
import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import { Routes, Route,useNavigate } from "react-router-dom"
import DetailPage from './pages/DetailPage'
import Dashboard from './pages/Dashboard'
import { useEffect, useState} from 'react'

function App() {
  const [apartments, setApartments] = useState([]);
  const [loading, setLoading] = useState(false);
  const nav = useNavigate();



  const editApartment = async (apartment) => {
   const updateApartment = {id: apartment.id , ...apartment };
    
    try {
      //new variable for what the POST fetch returns
      const res = await fetch(`http://localhost:3000/apartments/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(updateApartment),
      });
      const parsed = await res.json();
      nav("/");
    } catch (err) {
      console.log(err);
    }
  };

  const createNewApartment = async (apartment) => {
   
    try {
      const res = await fetch("http://localhost:3000/apartments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(apartment),
      });
      const parsed = await res.json();
      setApartments([parsed, ...apartments]);
      nav("/");
    } catch (err) {
      console.log(err);
    }
  };


  const getOneProduct = async () => {
    setLoading(true);
    const res = await fetch(`http://localhost:3000/apartments`);
    const parsed = await res.json();
    setApartments(parsed);
    setLoading(false);
  };

  useEffect(() => {    
      getOneProduct();
    }, []);

  return (
    <>
      <Navbar onSubmit={createNewApartment}/>
      <Routes>
        <Route path='/' element={<Dashboard apartments={apartments} loading={loading}/>}/>
        <Route path='/apartments/:id' element={<DetailPage apartments={apartments} setApartments={setApartments} onSubmit={editApartment}/>}/>
        {/* <Route path='/new' element={<NewPage apartments={apartmentsgit} setApartments={setApartments} />}/> */}
      </Routes>
      <Footer/>
    </>
  )
}

export default App
