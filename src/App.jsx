
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

<<<<<<< HEAD
  const handleCreateNewApartment = async (event) => {
    event.preventDefault();
    //Replace the data from the data recieve of inputs
    const newApartment = {
      "id": "018291832",
      "name": "Piero",
      "description": "Piero",
      "price": 150,
      "maxGuests": 4,
      "location": "Peniche",
      "imageUrls": [
        "https://source.unsplash.com/300x300/?apartment&id=20&image=1",
        "https://source.unsplash.com/300x300/?apartment&id=20&image=2",
        "https://source.unsplash.com/300x300/?apartment&id=20&image=3",
        "https://source.unsplash.com/300x300/?apartment&id=20&image=4",
        "https://source.unsplash.com/300x300/?apartment&id=20&image=5"
      ],
      "rating": 4.6,
      "reviews": 100,
      "host": {
        "name": "Lars",
        "imageUrl": "https://source.unsplash.com/300x300/?user"
      },
      "favorite": false
    }
    //================================================
   
=======


  const editApartment = async (apartment) => {
   const updateApartment = {id: apartment.id , ...apartment };
    
>>>>>>> 26f0b0a3fdef5c63f6a7336db8412cfeb7eff02d
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
<<<<<<< HEAD
      <Navbar createNew={handleCreateNewApartment}/>


      <Routes>
        <Route path='/' element={<Dashboard apartments={apartments} loading={loading}/>}/>
        <Route path='/apartments/:id' element={<DetailPage apartments={apartments} setApartments={setApartments}/>}/>
=======
      <Navbar onSubmit={createNewApartment}/>
      <Routes>
        <Route path='/' element={<Dashboard apartments={apartments} loading={loading}/>}/>
        <Route path='/apartments/:id' element={<DetailPage apartments={apartments} setApartments={setApartments} onSubmit={editApartment}/>}/>
        {/* <Route path='/new' element={<NewPage apartments={apartmentsgit} setApartments={setApartments} />}/> */}
>>>>>>> 26f0b0a3fdef5c63f6a7336db8412cfeb7eff02d
      </Routes>
      <Footer/>
    </>
  )
}

export default App
