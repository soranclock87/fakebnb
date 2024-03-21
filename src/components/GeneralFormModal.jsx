import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

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
  const { t } = useTranslation();

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
        {isEdit ? `${t('formAdd.edit')} ${t('formAdd.title')}` : `${t('formAdd.create')} ${t('formAdd.title')}`}
        <form className="mt-3 general-form" onSubmit={handleSubmit}>
          <label>
            {t('formAdd.lname')}
          </label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder={t('formAdd.name')}
          />
          <label>
            {t('formAdd.ldescription')}
          </label>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            cols={4}
            rows={4}
            placeholder={t('formAdd.description')}
          />
          <label>
            {t('formAdd.lprice')}
          </label>
          <input
            type="number"
            name="price"
            value={form.price}
            onChange={handleChange}
            placeholder="Price"
          />
          <label>
            {t('formAdd.lguests')}
          </label>
          <input
            type="number"
            name="maxGuests"
            value={form.maxGuests}
            onChange={handleChange}
            placeholder="Number of Guests"
          />
          <label>{t('formAdd.llocation')}</label>
          <input
            type="text"
            name="location"
            value={form.location}
            onChange={handleChange}
            placeholder={t('formAdd.location')}
          />
          {/* <label>Images</label>
          <input
            type="text"
            name="imageUrls"
            value={imageStrings}
            onChange={handleImages}
            placeholder="Image"
          /> */}
          <label>{t('formAdd.hostName')}</label>
          <input
            type="text"
            name="name"
            value={form.host.name}
            onChange={handleHost}
            placeholder={t('formAdd.hostName')}
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
        <Button onClick={handleSubmit} className="btn-form">
          {isEdit ? `${t('formAdd.edit')}` : `${t('formAdd.create')}`}
        </Button>
        <Button onClick={onClose} className="btn-form">
          {t('formAdd.close')}
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default GeneralFormModal;
