import { useEffect, useState } from "react"
// import axios from "axios";
import CardApartment from "./CardApartment";
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ListApartments = () => {

    const [apartments, setApartments] = useState([]);
    
    useEffect(() => {
        const getOneProduct = async () => {
          const res = await fetch(`http://localhost:3000/apartments`);
          const parsed = await res.json();
          setApartments(parsed);
        };
        getOneProduct();
      }, []);
  return (
    <>
    <Container className="">
        <Row gap={3}>
            
                {apartments.map((apartment) => {
                   return( <Col  key={apartment.id}>
                          <CardApartment apartment={apartment}/>
                    </Col>)
                })}
            
        </Row>
    
    </Container>
      
    </>
  )
}

export default ListApartments
