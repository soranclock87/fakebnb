import React, { useState, useEffect } from 'react';
// import axios from "axios";
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import CardApartment from './CardApartment';

function ListApartments({
  apartments, loading, makeFavorite, setApartments, searchInput,
}) {
  const [filtered, setFiltered] = useState(apartments);

  useEffect(() => {
    if (searchInput === '' || searchInput === undefined || searchInput === null) {
      setFiltered(apartments);
    } else {
      const newListApartment = apartments.filter((apartment) => apartment.location.toLowerCase().includes(searchInput.toLowerCase()));
      setFiltered(newListApartment);
    }
  }, [searchInput, apartments]);

  // useEffect()
  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {filtered?.map((apartment) => (
        <Col key={apartment.id} xs={12} md={4} lg={3} xl={3}>
          <Link className="custom-card-link" to={`/apartments/${apartment.id}`}>
            <CardApartment
              apartment={apartment}
              apartments={apartments}
              setApartments={setApartments}
              loading={loading}
              makeFavorite={makeFavorite}
            />
          </Link>
        </Col>
      ))}
    </>
  );
}

export default ListApartments;
