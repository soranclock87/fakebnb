import React, { useState } from 'react';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import { FaStar, FaRegHeart, FaHeart } from 'react-icons/fa';
import {
  Card, Carousel, Row, Col, Placeholder,
} from 'react-bootstrap';

function CardApartment({
  apartments, apartment, loading, makeFavorite, setApartments,
}) {
  const [ready, setReady] = useState(false);
  const [isFavorite, setIsFavorite] = useState(apartment.favorite || false);

  setTimeout(() => {
    if (!loading) setReady(true);
  }, 500);

  const handleFavorite = () => {
    const updatedFavorite = !isFavorite;
    setIsFavorite(updatedFavorite);
    const singleUpdate = { ...apartment, favorite: updatedFavorite };
    const updatedApartments = apartments.map((ap) => {
      if (ap.id === apartment.id) {
        return { ...ap, favorite: updatedFavorite };
      }
      return ap;
    });

    setApartments(updatedApartments);
    makeFavorite(singleUpdate);
  };

  if (!ready) {
    return (
      <Card style={{ width: '18rem' }}>
        <Placeholder as={Card.Image} animation="glow">
          <Placeholder className="placeholder-image" xs={6} />
        </Placeholder>
        <Card.Body>
          <Placeholder as={Card.Title} animation="glow">
            <Placeholder xs={6} />
          </Placeholder>
          <Placeholder as={Card.Text} animation="glow">
            <Placeholder xs={7} />
            {' '}
            <Placeholder xs={4} />
            {' '}
            <Placeholder xs={4} />
            {' '}
            <Placeholder xs={6} />
            {' '}
            <Placeholder xs={8} />
          </Placeholder>
        </Card.Body>
      </Card>
    );
  }

  return (
    <Card className="w-100">
      {apartment.rating === 0 ? (
        <div className="badge-new">New Apartment</div>
      ) : null}

      {/* Cambia entre estos dos iconos de corazón */}
      {isFavorite ? (
        <div className="heart-icon ">
          <FaHeart size={20} onClick={handleFavorite} />
        </div>
      ) : (
        <div className="heart-icon empty">
          <FaRegHeart size={20} onClick={handleFavorite} />
        </div>
      )}
      {/* Cambia entre estos dos iconos de corazón */}

      <Carousel
        prevIcon={<BsChevronLeft />}
        nextIcon={<BsChevronRight />}
        interval={null}
        indicators
        className="custom-carousel"
      >
        {apartment.imageUrls.map((imageUrl, imageId) => (
          // eslint-disable-next-line react/no-array-index-key
          <Carousel.Item key={imageId}>
            <Card.Img variant="top" src={imageUrl} />
          </Carousel.Item>
        ))}
      </Carousel>

      <Card.Body>
        <Row className="align-items-center card-title-content">
          <Col>
            <Card.Title className="custom-card-title ">{apartment.location}</Card.Title>
          </Col>
          <Col xs="auto " md="auto " lg="auto" className="align-self-baseline ">
            <Card.Text className="custom-card-rating">
              <FaStar />
              {' '}
              {apartment.rating}
            </Card.Text>
          </Col>
        </Row>
        <Card.Text className="text-card mt-1">
          Host of apartment :
          {' '}
          {apartment.host.name}
        </Card.Text>
        <Card.Text className="text-card">
          Max. Guests :
          {' '}
          {apartment.maxGuests}
        </Card.Text>
        <Card.Text className="text-card-special mt-2">
          <span className="text-price">
            €
            {apartment.price}
          </span>
          {' '}
          night
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CardApartment;
