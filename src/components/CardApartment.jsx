
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';

const CardApartment = ({apartment}) => {
  return (
    
    <Card style={{ width: '18rem' }}>
      <Carousel>
      <Carousel.Item>
        
        <Card.Img variant="top" src={apartment.imageUrls[0]} />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Card.Img variant="top" src={apartment.imageUrls[2]} />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <Card.Img variant="top" src={apartment.imageUrls[3]} />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    
    <Card.Body>
      <Card.Title>{apartment.name}</Card.Title>
      <Card.Text>
        {apartment.host['name']}
      </Card.Text>
      <Card.Text>
        {apartment.price}
      </Card.Text>
      <Button variant="primary">Go somewhere</Button>
    </Card.Body>
  </Card>
  )
}

export default CardApartment
