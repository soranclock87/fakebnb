import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";


const DetailPage = () => {

  const [apartment, setApartment] = useState();

  const {id} = useParams();


  console.log(id);
  useEffect(() => {

      const getSingleApartment = async () => {
        const res = await fetch(`http://localhost:3000/apartments/${id}`);
        console.log("the res value ",res)
        const parsed = await res.json();
        setApartment(parsed)
        console.log( "oasijdoas",parsed)
      }
     
      getSingleApartment();
        },[id])
        if (!apartment) {
          return <p>Loading...</p>;
        }
  return (
    <div className="content-page pt-5 pb-5">
      
      
        <h1>{apartment.name}</h1>
        <h1>{apartment.name}</h1>
        <h1>{apartment.name}</h1>
        <h1>{apartment.name}</h1>
        <h1>{apartment.name}</h1>
      
        <img src={apartment.imageUrls[0]} alt="" />

    </div>
  )
}

export default DetailPage
