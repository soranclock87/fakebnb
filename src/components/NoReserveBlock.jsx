import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

function NoReserveBlock({ apartment }) {
  const [selectedValue, setSelectedValue] = useState('');
  const [numNights, setNumNights] = useState(1);
  const { t } = useTranslation();

  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
    // eslint-disable-next-line radix
    setNumNights(parseInt(event.target.value));
  };

  const guestOptions = [];
  // eslint-disable-next-line no-plusplus
  for (let i = 1; i <= apartment.maxGuests; i++) {
    guestOptions.push(<option key={i} value={i}>{i}</option>);
  }

  const updatePriceNights = () => numNights * apartment.price;

  const obtainTotal = () => {
    const serviceFee = 60;
    const taxes = 26;
    return updatePriceNights() + serviceFee + taxes;
  };

  return (
    <div className=" col-sm-12 col-md-4 col-lg-4 sticky">
      <div className="card-total">
        <h2 className="title-price pb-2">
          €
          {' '}
          {apartment.price}
          {' '}
          <span className="">{t('reserve.night')}</span>
        </h2>
        <Form.Select aria-label=" " className="first-select" onChange={handleSelectChange} value={selectedValue}>
          <option>{t('reserve.numNights')}</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
        </Form.Select>

        <Form.Select className=" second-select mb-3">
          <option>{t('reserve.numGuests')}</option>
          {guestOptions}
        </Form.Select>

        <Button className="no-reserve-btn mb-3">
          {t('reserve.noReserve')}
        </Button>

        <p className="normal-text justify-content-center mb-3 d-flex">
          {' '}
          {t('reserve.advise')}
        </p>

        <div className="price-night mb-3 d-flex normal-text justify-content-between">
          <p className="link">
            €
            {apartment.price}
            {' '}
            x
            {' '}
            {numNights}
            {' '}
            {t('reserve.night')}
          </p>
          <p>
            €
            {updatePriceNights()}
          </p>
        </div>
        <div className="price-fee mb-3 d-flex normal-text justify-content-between">
          <p className="link">{t('reserve.fee')}</p>
          <p>€ 60</p>
        </div>
        <div className="price-taxes mb-3 d-flex normal-text justify-content-between">
          <p className="link">{t('reserve.taxes')}</p>
          <p>€ 26</p>
        </div>
        <hr />
        <div className="price-taxes d-flex bold-text justify-content-between">
          <p>{t('reserve.total')}</p>
          <p>
            €
            {obtainTotal()}
          </p>
        </div>
      </div>
    </div>
  );
}

export default NoReserveBlock;
