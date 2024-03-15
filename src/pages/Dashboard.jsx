import ListApartments from "../components/ListApartments"
import { Container, Row } from "react-bootstrap"

const Dashboard = () => {
  return (
    <div className="pt-5 pb-5 content-page">
      <Container fluid className="x-5">
        <Row gap={4}> 
          <ListApartments />
        </Row>
      </Container>
    </div>
  )
}

export default Dashboard
