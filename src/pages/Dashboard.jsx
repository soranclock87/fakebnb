import { Container, Row } from 'react-bootstrap';
import React from 'react';
import ListApartments from '../components/ListApartments';
import Need from '../assets/error-server.gif';
import { useTranslation } from 'react-i18next';

function Dashboard({
  apartments, setApartments, loading, makeFavorite, searchInput,
}) {
  const { t } = useTranslation();

  if (apartments.length === 0) {
    return (
      <div className="pt-5 pb-5 content-page error-server justify-content-center">
        <h2>{t('server')}</h2>
        <img src={Need} alt="error server" />
      </div>
    );
  }
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
