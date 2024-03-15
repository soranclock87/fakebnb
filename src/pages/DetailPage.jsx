import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";


const DetailPage = () => {

  const [apartment, setAparment] = useState();

  const {id} = useParams();

  useEffect(() => {

      const getSingleApartment = async () => {
        const res = await fetch(`http://localhost:3000/apartments/${id}`);
        const parsed = await res.json();
        setAparment(parsed)
        console.log( "oasijdoas",parsed)
      }
     
      getSingleApartment();
        },[id])

  return (
    <div className="mt-5 pt-5 pb-5">
     
      <h1>

    {apartment.name}
      </h1>

      <h1>

    {apartment.name}
      </h1>
      <h1>

    {apartment.name}
      </h1>


    </div>
  )
}

export default DetailPage
