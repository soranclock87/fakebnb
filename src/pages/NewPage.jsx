
import { useNavigate } from "react-router-dom";

const NewPage = ({apartments,setApartments}) => {

  
  // create the const to the inputs

  const nav = useNavigate();

  //create the function to call the server and method POST to create the new apartment

  const handleSubmit = async (event) => {
    event.preventDefault();
    //Replace the data from the data recieve of inputs
    const newApartment = {
      "id": "018291832",
      "name": "Piero",
      "description": "Piero",
      "price": 150,
      "maxGuests": 4,
      "location": "Italy",
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
   
    try {
      //new variable for what the POST fetch returns
      const res = await fetch("http://localhost:3000/apartments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newApartment),
      });
      //convert the res variable to json so we can use it
      //.json()  IS A PROMISE!!!!! MAKE SURE TO AWAIT
      const parsed = await res.json();
      console.log("apartment was successfully added", parsed);
      setApartments([parsed, ...apartments]);
      nav("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div  className="content-page mt-5 pt-5 pb-5">
      <form action="" className="mt-5 pt-5" onSubmit={handleSubmit}>

        {/* //create all the inputs  */}
        <button type="submit">CREAR</button>
      </form>
    </div>
  )
}

export default NewPage
