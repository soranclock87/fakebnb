import { useEffect, useState } from "react"
// import axios from "axios";
import CardApartment from "./CardApartment";
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Placeholder from 'react-bootstrap/Placeholder';

const ListApartments = () => {

    const [apartments, setApartments] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getOneProduct = async () => {
          const res = await fetch(`http://localhost:3000/apartments`);
          const parsed = await res.json();
          setApartments(parsed);
          setLoading(false);
        };
        getOneProduct();
      }, []);
      
  return (
    <>
    <Container className="">
        <Row className="g-4">
                
        {loading ? (
          // Placeholder de tarjeta mientras se carga
          <>
            {[...Array(20)].map((_, index) => (
              <Col key={index}>
                 <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                    <Placeholder as={Card.Title} animation="glow">
                        <Placeholder xs={6} />
                    </Placeholder>
                    <Placeholder as={Card.Text} animation="glow">
                        <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
                        <Placeholder xs={6} /> <Placeholder xs={8} />
                    </Placeholder>
                    <Placeholder.Button variant="primary" xs={6} />
                    </Card.Body>
                </Card>
              </Col>
            ))}
          </>
        ) : (
          // Renderización de tarjetas de apartamentos reales
          apartments.map((apartment) => (
            <Col key={apartment.id} xs={12} md={4} lg={3}>
              <CardApartment apartment={apartment}/>
            </Col>
          ))
        )}
        </Row>
    </Container>
      
    </>
  )
}

export default ListApartments
