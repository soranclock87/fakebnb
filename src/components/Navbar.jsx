import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from '../assets/airbnb.png'
import { useEffect,useState } from 'react';
import {  useLocation } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';

function NavbarApp() {
  const location = useLocation(); 
  const [url, setUrl] = useState(null);
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
    <Navbar expand="lg" className="px-5 justify-content-between" fixed="top">
    
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
        <Nav.Link href="/new" className={"custom-nav-text " + (url === "/new" ?" active-text" : "")}>New Apartment</Nav.Link>
        <Nav.Link href="/experiences" className={"custom-nav-text " + (url === "/experiences" ?" active-text" : "")}>Online Experiences</Nav.Link>
      </Nav>
        <NavDropdown title="" className='mx-5'>
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
       
        
    </Navbar>
     <Nav  className="px-5  justify-content-center text-center mt-3 pt-5">
     <Form noValidate className='mb-3 form-filters' validated={validated} onSubmit={handleSubmit}>
      <>
        <Form.Group  className="mx-3" controlId="validationCustom01">
          <Form.Label>First name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="First name"
            defaultValue="Mark"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group  className="mx-3" controlId="validationCustom02">
          <Form.Label>Last name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Last name"
            defaultValue="Otto"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group  controlId="validationCustomUsername">
        <Button type="submit">B</Button>
        </Form.Group>
      </>
      
      
     
    </Form>
   </Nav>
   </div>
  );
}

export default NavbarApp;