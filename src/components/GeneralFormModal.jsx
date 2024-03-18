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
    imageUrls: [
      'https://source.unsplash.com/300x300/?apartment&id=21&image=1',
      'https://source.unsplash.com/300x300/?apartment&id=21&image=2',
      'https://source.unsplash.com/300x300/?apartment&id=21&image=3',
      'https://source.unsplash.com/300x300/?apartment&id=21&image=4',
      'https://source.unsplash.com/300x300/?apartment&id=21&image=5',
    ],

    rating: 0,
    reviews: 0,
    host: {
      name: '',
      imageUrl: 'https://source.unsplash.com/300x300/?user',
    },
    favorite: false,
  };

  const [form, setForm] = useState(apartment ?? defaultApartment);
  // const [imageStrings, setImageStrings] = useState(
  //   apartment?.imageUrls.join(',') ?? '',
  // );

  function resetStates() {
    setForm(defaultApartment);
    // setImageStrings('');
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    // const imageUrls = imageStrings.split(',').map((url) => url.trim());
    // console.log(imageStrings, imageUrls);
    // const updateForm = { ...form, imageUrls };
    const updateForm = { ...form };
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

  // function handleImages(event) {
  //   setImageStrings(event.target.value);
  // }

  return (
    <Modal
      show={show}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >

      <Modal.Body>
        {isEdit ? 'Edit the Apartment' : 'Create a new Apartment'}
        <form className="mt-3 general-form" onSubmit={handleSubmit}>
          <label>
            Name of apartment
          </label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Apartment Name"
          />
          <label>
            Description
          </label>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            cols={4}
            rows={4}
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
          {/* <label>Images</label>
          <input
            type="text"
            name="imageUrls"
            value={imageStrings}
            onChange={handleImages}
            placeholder="Image"
          /> */}
          <label> Host name</label>
          <input
            type="text"
            name="name"
            value={form.host.name}
            onChange={handleHost}
            placeholder="Host Name"
          />
          {/* <input
            type="text"
            name="imageUrl"
            value={form.host.imageUrl}
            onChange={handleHost}
            placeholder="Host Image"
          /> */}
          {/* <input
            type="text"
            name="favorite"
            value={form.favorite}
            onChange={handleChange}
            placeholder="Favorite"
          /> */}
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleSubmit}>
          {isEdit ? 'Update' : 'Create'}
        </Button>
        <Button onClick={onClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default GeneralFormModal;
