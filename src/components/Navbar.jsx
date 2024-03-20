import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { IoMdSearch } from 'react-icons/io';
import Logo from '../assets/airbnb.png';
import User from '../assets/user.jpg';
import Menu from '../assets/menu.png';
import GeneralFormModal from './GeneralFormModal';

const locales = {
  en: { title: 'English' },
  es: { title: 'Español' },
  it: { title: 'Italian' },
};

function NavbarApp({ onSubmit, onSearchSubmit, apartments }) {
  const location = useLocation();
  const [url, setUrl] = useState(null);
  const [modalShow, setModalShow] = useState(false);
  const [searchInput, setSearchInput] = useState('');
  const handleModalClose = () => setModalShow(false);
  const { t, i18n } = useTranslation();
  const [messages, setMessages] = useState(0);

  useEffect(() => {
    setUrl(location.pathname);
  }, [location]);

  const [validated, setValidated] = useState();

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    const filteredApartments = apartments.filter((apartment) => apartment
      .location.toLowerCase().includes(searchInput.toLowerCase()));

    console.log(filteredApartments);
    onSearchSubmit(filteredApartments);
    setValidated(true);
  };

  return (
    <div className="navbar-content">
      <Navbar expand="lg" className="px-5 pt-3 justify-content-between" fixed="top">

        <Navbar.Brand href="#home" className="brand-color">
          <img
            alt=""
            src={Logo}
            width="30"
            height="30"
            className="d-inline-block align-top "
          />
          {' '}
          fakebnb
        </Navbar.Brand>
        <Nav>
          <Nav.Link href="/" className={`custom-nav-text ${url === '/' ? ' active-text' : ''}`}>Stays</Nav.Link>
          <Button
            className=" custom-nav-text"
            onClick={() => setModalShow(true)}
          >
            New Apartment
          </Button>
          <Nav.Link href="/experiences" className={`custom-nav-text ${url === '/experiences' ? ' active-text' : ''}`}>Online Experiences</Nav.Link>
        </Nav>
        {/* <Nav>
          <ul>
            {Object.keys(locales).map((locale) => (
              <li key={locale}>
                <button style={{ fontWeight: i18n.resolvedLanguage === locale ? 'bold' : 'normal' }} type="submit" onClick={() => i18n.changeLanguage(locale)}>
                  {locales[locale].title}
                </button>
              </li>
            ))}
          </ul>
        </Nav> */}
        <Nav>

          <GeneralFormModal
            show={modalShow}
            onClose={handleModalClose}
            isEdit={false}
            onSubmit={onSubmit}
            onHide={() => setModalShow(false)}
          />

          <Dropdown>
            <Dropdown.Toggle id="dropdown-basic">
              <img className="ms-1 menu-icon" src={Menu} alt="" />
              <img className="rounded-image" src={User} alt="" />
            </Dropdown.Toggle>

            <Dropdown.Menu>
              {Object.keys(locales).map((locale) => (

                <Dropdown.Item key={locale} href="#/action-1" type="submit" onClick={() => i18n.changeLanguage(locale)}>
                  {locales[locale].title}
                </Dropdown.Item>

              ))}
            </Dropdown.Menu>
          </Dropdown>
        </Nav>

      </Navbar>
      <Nav className="px-5  justify-content-center text-center pt-55">
        <Form noValidate className="mb-3 form-filters" validated={validated} onSubmit={handleSubmit}>
          <>
            <Form.Group className="ps-4 input-nofilter" controlId="validationCustom01">
              <Form.Label>Where</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Search destinations"
                onChange={(e) => setSearchInput(e.currentTarget.value)}
              />
            </Form.Group>
            <Form.Group className="input-nofilter" controlId="validationCustom02">
              <Form.Label>Check in</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Add dates"
              />
            </Form.Group>
            <Form.Group className="input-nofilter" controlId="validationCustom02">
              <Form.Label>Check out</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Add dates"
              />

            </Form.Group>
            <Form.Group className=" input-nofilter special-filter" controlId="validationCustom02">
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
