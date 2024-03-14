
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div>
      <Link to="/">Home</Link> - 
      <Link to="/detail/:id">Detail</Link> - 
      <Link to="/new">New</Link>
    </div>
  )
}

export default Navbar
