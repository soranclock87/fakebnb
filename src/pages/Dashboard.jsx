import { Container, Row } from 'react-bootstrap';
import React from 'react';
import { useTranslation } from 'react-i18next';
import ListApartments from '../components/ListApartments';

function Dashboard({
  apartments, setApartments, loading, makeFavorite,
}) {
  const { t } = useTranslation();

  return (
    <div className="pt-5 pb-5 content-page">
      <Container fluid className="px-5">
        <Row gap={4}>
          <ListApartments
            apartments={apartments}
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
