import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';

function NoReserveBlock({ apartment }) {
  const [selectedValue, setSelectedValue] = useState('');
  const [numNights, setNumNights] = useState(1);

  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
    setNumNights(parseInt(event.target.value)); // Convertir a número entero
  };

  const guestOptions = [];
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
          <span className="">night</span>
        </h2>
        <Form.Select aria-label=" " className="first-select" onChange={handleSelectChange} value={selectedValue}>
          <option>Nights </option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
        </Form.Select>

        <Form.Select className=" second-select mb-3">
          <option>Guests</option>
          {guestOptions}
        </Form.Select>

        <Button className="no-reserve-btn mb-3">
          No Reserve
        </Button>

        <p className="normal-text justify-content-center mb-3 d-flex">
          {' '}
          You won´t be charged yet
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
            night
          </p>
          <p>
            €
            {updatePriceNights()}
          </p>
        </div>
        <div className="price-fee mb-3 d-flex normal-text justify-content-between">
          <p className="link">fakebnb service fee</p>
          <p>€ 60</p>
        </div>
        <div className="price-taxes mb-3 d-flex normal-text justify-content-between">
          <p className="link">Taxes</p>
          <p>€ 26</p>
        </div>
        <hr />
        <div className="price-taxes d-flex bold-text justify-content-between">
          <p>Total</p>
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
