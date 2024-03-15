import { useEffect, useState } from "react"
// import axios from "axios";
import CardApartment from "./CardApartment";
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Placeholder from 'react-bootstrap/Placeholder';
import { Link } from "react-router-dom";

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
          apartments.map((apartment) => (
            <Col  key={apartment.id} xs={12} md={4} lg={3} xl={2} >
              <Link className="custom-card-link" to={`/rooms/${apartment.id}`}>
                <CardApartment apartment={apartment}/>
              </Link>
            </Col>
          ))
        )}
      
    </>
  )
}

export default ListApartments
