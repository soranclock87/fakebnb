import { Container, Row } from 'react-bootstrap';
import ListApartments from '../components/ListApartments';

function Dashboard({ apartments, loading }) {
  return (
    <div className="pt-5 pb-5 content-page">
      <Container fluid className="px-5">

        <Row gap={4}>
          <ListApartments apartments={apartments} loading={loading} />
        </Row>
      </Container>
    </div>
  );
}

export default Dashboard;
