import './App.css';
import { Routes, Route, useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import DetailPage from './pages/DetailPage';
import Dashboard from './pages/Dashboard';
import NotFound from './pages/NotFound';

const API_URL = 'https://backend-fakebnb.adaptable.app/apartments' || 'http://localhost:3000/apartments';

function App() {
  const [apartments, setApartments] = useState([]);
  const [loading, setLoading] = useState(false);
  const nav = useNavigate();

  const editApartment = async (apartment) => {
    const updateApartment = { id: apartment.id, ...apartment };
    console.log('estoy modificando este', updateApartment);
    try {
      await fetch(`${API_URL}/${apartment.id}`, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(updateApartment),
      });
      nav('/');
    } catch (err) {
      console.log(err);
    }
  };

  const createNewApartment = async (apartment) => {
    const updateApartment = { id: (apartment.length + 1).toString(), ...apartment };
    console.log(updateApartment);

    try {
      const res = await fetch(`${API_URL}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(apartment),
      });
      const parsed = await res.json();
      console.log(parsed);
      setApartments([parsed, ...apartments]);

      nav('/');
    } catch (err) {
      console.log(err);
    }
  };

  const getOneProduct = async () => {
    setLoading(true);
    const res = await fetch(`${API_URL}`);
    const parsed = await res.json();
    setApartments(parsed);
    setLoading(false);
  };

  useEffect(() => {
    getOneProduct();
  }, []);

  return (
    <>
      <Navbar onSubmit={createNewApartment} />
      <Routes>
        <Route path="/" element={<Dashboard apartments={apartments} setApartments={setApartments} loading={loading} makeFavorite={editApartment} />} />
        <Route path="/apartments/:id" element={<DetailPage apartments={apartments} setApartments={setApartments} onSubmit={editApartment} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
