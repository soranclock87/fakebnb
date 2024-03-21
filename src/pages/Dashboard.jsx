import { Container, Row } from 'react-bootstrap';
import React from 'react';
import ListApartments from '../components/ListApartments';

function Dashboard({
  apartments, setApartments, loading, makeFavorite, searchInput,
}) {
  return (
    <div className="pt-5 pb-5 content-page">
      <Container fluid className="px-5">
        <Row gap={4}>
          <ListApartments
            apartments={apartments}
            searchInput={searchInput}
            setApartments={setApartments}
            loading={loading}
            makeFavorite={makeFavorite}
          />
        </Row>
      </Container>
    </div>
  );
}

export default Dashboard;
