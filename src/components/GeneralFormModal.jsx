import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React, { useState } from 'react';

function GeneralFormModal({
  show, apartment, isEdit, onSubmit, onHide, onClose,
}) {
  const defaultApartment = {
    name: '',
    description: '',
    price: 0,
    maxGuests: 0,
    location: '',
    imageUrls: [],

    rating: 0,
    reviews: 0,
    host: {
      name: '',
      imageUrl: '',
    },
    favorite: false,
  };

  const [form, setForm] = useState(apartment ?? defaultApartment);
  const [imageStrings, setImageStrings] = useState(
    apartment?.imageUrls.join(',') ?? '',
  );

  function resetStates() {
    setForm(defaultApartment);
    setImageStrings('');
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    const imageUrls = imageStrings.split(',').map((url) => url.trim());
    console.log(imageStrings, imageUrls);
    const updateForm = { ...form, imageUrls };

    onSubmit(updateForm);

    if (!isEdit) {
      resetStates();
    }
    onHide();
  };

  function handleChange(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
  }

  function handleHost(event) {
    setForm({
      ...form,
      host: { ...form.host, [event.target.name]: event.target.value },
    });
  }

  function handleImages(event) {
    setImageStrings(event.target.value);
  }

  return (
    <Modal
      show={show}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >

      <Modal.Body>
        {isEdit ? 'Edit the Apartment' : 'Create a new Apartment'}
        <form className="mt-5 pt-5" onSubmit={handleSubmit}>
          <label>
            Name of apartment
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Apartment Name"
            />
          </label>
          <label>
            Description
          </label>
          <input
            type="text"
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="Description"
          />
          <label>
            Price per night
          </label>
          <input
            type="number"
            name="price"
            value={form.price}
            onChange={handleChange}
            placeholder="Price"
          />
          <label>
            Max guests
          </label>
          <input
            type="number"
            name="maxGuests"
            value={form.maxGuests}
            onChange={handleChange}
            placeholder="Number of Guests"
          />
          <label> Location</label>
          <input
            type="text"
            name="location"
            value={form.location}
            onChange={handleChange}
            placeholder="Location"
          />
          <label>Images</label>
          <input
            type="text"
            name="imageUrls"
            value={imageStrings}
            onChange={handleImages}
            placeholder="Image"
          />

          <input
            type="text"
            name="reviews"
            value={form.reviews}
            onChange={handleChange}
            placeholder="Reviews"
          />
          <input
            type="text"
            name="name"
            value={form.host.name}
            onChange={handleHost}
            placeholder="Host Name"
          />
          <input
            type="text"
            name="imageUrl"
            value={form.host.imageUrl}
            onChange={handleHost}
            placeholder="Host Image"
          />
          <input
            type="text"
            name="favorite"
            value={form.favorite}
            onChange={handleChange}
            placeholder="Favorite"
          />
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleSubmit}>
          {isEdit ? 'Update' : 'Create'}
        </Button>
        <Button onClick={onClose}>
          {isEdit ? 'Update' : 'Create'}
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default GeneralFormModal;
