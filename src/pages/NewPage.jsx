
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const NewPage = ({apartments,setApartments}) => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [maxGuests, setMaxGuests] = useState("");
  const [location, setLocation] = useState("");
  const [imageUrls, setImageUrls] = useState("");
  const [rating, setRating] = useState("");
  const [reviews, setReviews] = useState("");
  const [hostName, setHostName] = useState("");
  const [hostImageUrl, setHostImageUrl] = useState("");
  const [favorite, setFavorite] = useState("");


  const nav = useNavigate();
  
  // create the const to the inputs

 

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
   
    try {
      //new variable for what the POST fetch returns
      const res = await fetch("http://localhost:3000/apartments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newApartment),
      });
      const parsed = await res.json();
      setApartments([parsed, ...apartments]);
      nav("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div  className="content-page mt-5 pt-5 pb-5">
      <form action="" className="mt-5 pt-5" onSubmit={handleSubmit}>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Apartment Name" />
        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" />
        <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Price" />
        <input type="number" value={maxGuests} onChange={(e) => setMaxGuests(e.target.value)} placeholder="Number of Guests" />
        <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} placeholder="Location" />
        <input type="text" value={imageUrls} onChange={(e) => setImageUrls(e.target.value)} placeholder="Image" />
        <input type="number" value={rating} onChange={(e) => setRating(e.target.value)} placeholder="Rating" />
        <input type="text" value={reviews} onChange={(e) => setReviews(e.target.value)} placeholder="Reviews" />
        <input type="text" value={hostName} onChange={(e) => setHostName(e.target.value)} placeholder="Host Name" />
        <input type="text" value={hostImageUrl} onChange={(e) => setHostImageUrl(e.target.value)} placeholder="Host Image" />
        <input type="text" value={favorite} onChange={(e) => setFavorite(e.target.value)} placeholder="Favorite" />
        

        {/* //create all the inputs  */}
        <button type="submit">CREAR</button>
      </form>
    </div>
  )
}


export default NewPage
