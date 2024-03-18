import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import Logo from '../assets/airbnb.png'
import { useEffect,useState } from 'react';
import {  useLocation } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { IoMdSearch } from "react-icons/io";
import User from "../assets/user.jpg"
import Menu from "../assets/menu.png"
import GeneralFormModal from "../components/GeneralFormModal";

function NavbarApp({createNew}) {
  const location = useLocation(); 
  const [url, setUrl] = useState(null);
  const [modalShow, setModalShow] = useState(false);
const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);


  useEffect(() => {
    setUrl(location.pathname);
  }, [location]);


  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <div className='navbar-content'>
    <Navbar expand="lg" className="px-5 pt-3 justify-content-between" fixed="top">
    
      <Navbar.Brand href="#home" className='brand-color'>
          <img
            alt=""
            src={Logo}
            width="30"
            height="30"
            className="d-inline-block align-top "
          />{' '}
          fakebnb
        </Navbar.Brand>
        <Nav>
        <Nav.Link href="/" className={"custom-nav-text " + (url === "/" ?" active-text" : "")}>Stays</Nav.Link>
        <Button
            className="no-button-style custom-nav-text"
            onClick={() => setModalShow(true)}
          >
            Edit
          </Button>
        <Nav.Link href="/experiences" className={"custom-nav-text " + (url === "/experiences" ?" active-text" : "")}>Online Experiences</Nav.Link>
      </Nav>
      <Nav>

        <GeneralFormModal
            show={modalShow}
            createNew={createNew}
            onHide={() => setModalShow(false)}
          />

       <Dropdown>
      <Dropdown.Toggle  id="dropdown-basic">
        <img className="ms-1 menu-icon" src={Menu} alt="" />
      <img  className="rounded-image" src={User} alt="" />
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown> 
      </Nav>
        
       
        
    </Navbar>
     <Nav  className="px-5  justify-content-center text-center pt-55">
     <Form noValidate className='mb-3 form-filters' validated={validated} onSubmit={handleSubmit}>
      <>
        <Form.Group  className="ps-4 input-nofilter" controlId="validationCustom01">
          <Form.Label>Where</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Search destinations"
          />
        </Form.Group>
        <Form.Group  className="input-nofilter" controlId="validationCustom02">
          <Form.Label>Check in</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Add dates"
          />
        </Form.Group>
        <Form.Group  className="input-nofilter" controlId="validationCustom02">
          <Form.Label>Check out</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Add dates"
          />
         
        </Form.Group>
        <Form.Group  className=" input-nofilter special-filter" controlId="validationCustom02">
          <div>
          <Form.Label>Who</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Add guess"
          />
          </div>
          
          <Button type="submit"><IoMdSearch /></Button>
         
        </Form.Group>
      </>
      
      
     
    </Form>
   </Nav>
   </div>
  );
}

export default NavbarApp;