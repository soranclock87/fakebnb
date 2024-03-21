import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import { useTranslation } from 'react-i18next';
import Medal from '../assets/medal.png';
import Location from '../assets/location.png';
import Calendar from '../assets/event.png';
import GeneralFormModal from '../components/GeneralFormModal';
import NoReserveBlock from '../components/NoReserveBlock';

const API_URL = 'https://backend-fakebnb.adaptable.app/apartments' || 'http://localhost:3000/apartments';

function DetailPage({ apartments, setApartments, onSubmit }) {
  const [apartment, setApartment] = useState();

  const [modalShow, setModalShow] = useState(false);
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const handleModalShow = () => setModalShow(true);
  const handleModalClose = () => setModalShow(false);

  const { id } = useParams();
  const nav = useNavigate();
  const { t } = useTranslation();

  const getSingleApartment = async () => {
    const res = await fetch(`${API_URL}/${id}`);
    const parsed = await res.json();
    setApartment(parsed);
  };

  useEffect(() => {
    getSingleApartment();
  }, [id]);

  const handleDelete = async (apartmentId) => {
    try {
      await fetch(
        `${API_URL}/${apartmentId}`,
        {
          method: 'DELETE',
        },
      );
      const newApartments = apartments.filter((current) => current.id !== apartmentId);
      setApartments(newApartments);
      nav('/');
    } catch (err) {
      console.log(err);
    }
  };

  if (!apartment) {
    return <p>Loading...</p>;
  }

  return (
    <div className="content-page detail-page pt-5 pb-5 px-5">
      <h3 className="pt-2 pb-1">{apartment.name}</h3>
      <div className="reviews-part pb-3">
        <div>
          <p className="pe-2">
            <FaStar />
            {' '}
            {apartment.rating}
          </p>
          <span>.</span>
          <p className="mx-2">
            {apartment.reviews}
            {' '}
            {t('details.reviews')}
          </p>
          <span>.</span>
          <p className="mx-2">{apartment.location}</p>
        </div>

        <div>
          <Button
            className="no-button-style"
            onClick={handleModalShow}
          >
            {t('details.edit')}
          </Button>

          <GeneralFormModal
            show={modalShow}
            apartment={apartment}
            onSubmit={onSubmit}
            onClose={handleModalClose}
            isEdit
            onHide={() => setModalShow(false)}
          />
          <Button className="no-button-style" onClick={() => handleShow(apartment.id)}>
            {t('details.delete')}
          </Button>
        </div>
      </div>
      {/* <!-- Gallery --> */}
      <div className="row  ">
        <div className="col-lg-6 col-md-6 col-sm-6 mb-lg-0">
          <img
            src={apartment.imageUrls[0]}
            className="w-100 shadow-1-strong first-image"
            alt="Boat on Calm Water"
          />
        </div>

        <div className="col-lg-6  col-md-6 col-sm-6 ">
          <div className="row">
            <div className="col-lg-6  col-md-6 col-sm-6 ">
              <img
                src={apartment.imageUrls[2]}
                className="w-100 shadow-1-strong mb-4"
                alt="Mountains in the Clouds"
              />

              <img
                src={apartment.imageUrls[3]}
                className="w-100 shadow-1-strong "
                alt="Boat on Calm Water"
              />
            </div>
            <div className="col-lg-6  col-md-6 col-sm-6 ">
              <img
                src={apartment.imageUrls[4]}
                className="w-100 shadow-1-strong mb-4 second-image"
                alt="Mountains in the Clouds"
              />

              <img
                src={apartment.imageUrls[1]}
                className="w-100 shadow-1-strong third-image"
                alt="Boat on Calm Water"
              />
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Gallery --> */}

      <div className=" row d-flex pt-5 m-0 mt-3">
        <div className=" col-sm-12 col-md-8 col-lg-8">
          <h2>
            {t('details.premium')}
            {' '}
            {apartment.location}
          </h2>
          <div className="reviews-part mt-3 pb-2">
            <div>
              <p className="pe-2">
                {' '}
                {apartment.maxGuests}
                {' '}
                {t('details.guest')}
              </p>
              <span>.</span>
              <p className="mx-2">
                3
                {' '}
                {t('details.bedrooms')}
              </p>
              <span>.</span>
              <p className="mx-2">
                4
                {' '}
                {t('details.beds')}
              </p>
              <span>.</span>
              <p className="mx-2">
                5.5
                {' '}
                {t('details.baths')}
              </p>
            </div>
          </div>
          <div className="reviews-part bold-text pb-2">
            <div>
              <p className="pe-2">
                <FaStar />
                {' '}
                {apartment.rating}
              </p>
              <span>.</span>
              <p className="mx-2 link">
                {apartment.reviews}
                {' '}
                {t('details.reviews')}
              </p>
            </div>
          </div>

          <hr className="me-5" />
          <div className="host-part pt-2 pb-2">
            <img src={apartment.host.imageUrl} alt="" />
            <div className="ms-3">
              <h6 className="name-host">
                {t('details.hosted')}
                {' '}
                {apartment.host.name}
              </h6>
              <div className="reviews-part ">
                <div>
                  <p className="">
                    {t('details.super')}
                  </p>
                  <span className="mx-2">.</span>
                  <p className="">
                    4
                    {' '}
                    {t('details.hostYear')}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <hr className="me-5" />

          <div className="block-logo-text mb-3 mt-5">
            <img src={Calendar} alt="" className="me-3" />
            <div>
              <p className="black-info">
                {t('details.cancelation')}
              </p>
            </div>
          </div>
          <div className="block-logo-text mb-3">
            <img src={Location} alt="" className="me-3" />
            <div>
              <p className="black-info">{t('details.location.title')}</p>
              <p>{t('details.location.subtitle')}</p>
            </div>
          </div>
          <div className="block-logo-text mb-5">
            <img src={Medal} alt="" className="me-3" />
            <div>
              <p className="black-info">
                {apartment.host.name}
                {' '}
                {t('details.superHost.title')}
              </p>
              <p>{t('details.superHost.subtitle')}</p>
            </div>
          </div>
          <hr className="me-5" />

          <div className="mt-5 block-message me-5 mb-5">
            {t('details.adviseTranslation.message')}
            {' '}
            <p className="link bold-text">{t('details.adviseTranslation.button')}</p>
          </div>
          <p className="normal-text mb-4">{apartment.description}</p>

          <Button className=" no-button-style  mb-5">
            {t('details.btnMore')}
            {'>'}
          </Button>
          <hr className="me-5" />
        </div>
        <NoReserveBlock apartment={apartment} />
      </div>

      <div className="mt-5">
        <div>
          <p className="normal-text">
            {t('details.privacy')}
          </p>
          <p className="normal-text mt-5">
            {t('details.privacy2')}
          </p>
        </div>
      </div>

      {/* MODAL NORMAL DELETE */}
      <Modal
        show={show}
        onHide={handleClose}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>{t('modal.title')}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{t('modal.message')}</Modal.Body>
        <Modal.Footer>
          <Button className="btn-form" onClick={() => handleDelete(id)}>
            {t('modal.confirm')}
          </Button>
          <Button className="btn-form" onClick={handleClose}>
            {t('modal.close')}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default DetailPage;
