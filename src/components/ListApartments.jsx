import { useEffect, useState } from "react"
// import axios from "axios";
import CardApartment from "./CardApartment";

const ListApartments = () => {

    const [apartments, setApartments] = useState([]);
    
    useEffect(() => {
        const getOneProduct = async () => {
          const res = await fetch(`http://localhost:3000/apartments`);
          const parsed = await res.json();
          console.log(parsed);
          setApartments(parsed);
          console.log(apartments)
        };
        getOneProduct();
      }, []);
  return (
    <>
      <CardApartment />
    </>
  )
}

export default ListApartments
