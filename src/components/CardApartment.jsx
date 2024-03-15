
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import { useState } from 'react';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'; 
import { FaStar } from 'react-icons/fa';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const CardApartment = ({apartment}) => {


  return (
    
    <Card className='mb-3 w-100' >

      
    <Carousel
        prevIcon={<BsChevronLeft />} 
        nextIcon={<BsChevronRight />}  
        interval={null} 
        indicators={true} 
        className="custom-carousel"
      >
        {apartment.imageUrls.map((imageUrl, idx) => (
          <Carousel.Item key={idx}>
            <Card.Img variant="top" src={imageUrl} />
          </Carousel.Item>
        ))}
      </Carousel>
    
    <Card.Body>
    <Row  className="align-items-center card-title-content">
        <Col>
          <Card.Title className="custom-card-title ">{apartment.location}</Card.Title>
        </Col>
        <Col xs="auto " md="auto " lg="auto" className='align-self-baseline '>
          <Card.Text className='custom-card-rating'>
            <FaStar /> {apartment.rating}
          </Card.Text>
        </Col>
      </Row>
      <Card.Text className='text-card mt-1'>
        Host of apartment : {apartment.host['name']}
      </Card.Text>
      <Card.Text className='text-card'>
        Max. Guests : {apartment.maxGuests}
      </Card.Text>
      <Card.Text  className='text-card-special mt-2'>
        <span className='text-price'>€ {apartment.price}</span> night
      </Card.Text>
    </Card.Body>
  </Card>
  )
}

export default CardApartment
