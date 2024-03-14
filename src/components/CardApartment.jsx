
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import { useState } from 'react';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'; 
import { FaStar } from 'react-icons/fa';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const CardApartment = ({apartment}) => {

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    
    <Card>
      <Carousel   prevIcon={<BsChevronLeft />} // Utiliza el ícono de flecha izquierda
      nextIcon={<BsChevronRight />}  interval={null} pause activeIndex={index} onSelect={handleSelect} indicators={true} className="custom-carousel">
      <Carousel.Item>
        
        <Card.Img variant="top" src={apartment.imageUrls[0]} />
       
      </Carousel.Item>
      <Carousel.Item>
        <Card.Img variant="top" src={apartment.imageUrls[2]} />
       
      </Carousel.Item>
      <Carousel.Item>
      <Card.Img variant="top" src={apartment.imageUrls[3]} />
       
     
      </Carousel.Item>
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
        Owner : {apartment.host['name']}
      </Card.Text>
      <Card.Text className='text-card'>
        Guests : {apartment.maxGuests}
      </Card.Text>
      <Card.Text  className='text-card-special mt-2'>
        <div className='text-price'>€ {apartment.price}</div> night
      </Card.Text>
    </Card.Body>
  </Card>
  )
}

export default CardApartment
