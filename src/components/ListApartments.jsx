import { useEffect, useState } from "react"
// import axios from "axios";
import CardApartment from "./CardApartment";
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Placeholder from 'react-bootstrap/Placeholder';
import { Link } from "react-router-dom";

const ListApartments = ({apartments,loading}) => {
    
  return (
    <>          
        
          {apartments.map((apartment) => (
            <Col  key={apartment.id} xs={12} md={4} lg={3} xl={3} >
              <Link className="custom-card-link" to={`/apartments/${apartment.id}`}>
                <CardApartment apartment={apartment} loading={loading}/>
              </Link>
            </Col>
          ))
          }
      
    </>
  )
}

export default ListApartments
