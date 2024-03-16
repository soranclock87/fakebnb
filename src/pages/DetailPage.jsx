import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import Medal from "../assets/medal.png";
import Location from "../assets/location.png";
import Calendar from "../assets/event.png";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import GeneralFormModal from "../components/GeneralFormModal";
import Modal from "react-bootstrap/Modal";

const DetailPage = ({ apartments, setApartments }) => {
  const [apartment, setApartment] = useState();
  const [modalShow, setModalShow] = useState(false);
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const { id } = useParams();
  const nav = useNavigate();

  

  const getSingleApartment = async () => {
    const res = await fetch(`http://localhost:3000/apartments/${id}`);
    const parsed = await res.json();
    setApartment(parsed);
  };

  useEffect(() => {
    getSingleApartment();
  }, [id]);

  if (!apartment) {
    return <p>Loading...</p>;
  }
  return (
    <div className="content-page detail-page pt-5 pb-5 px-5">
      <h3 className="pt-2 pb-1">{apartment.name}</h3>

      <div className="reviews-part pb-3">
        <div>
          <p className="pe-2">
            <FaStar /> {apartment.rating}
          </p>
          <span>.</span>
          <p className="mx-2">{apartment.reviews} reeviews</p>
          <span>.</span>
          <p className="mx-2">{apartment.location}</p>
        </div>

        <div>
          <Button
            className="no-button-style"
            onClick={() => setModalShow(true)}
          >
            Edit
          </Button>

          <GeneralFormModal
            show={modalShow}
            apartment={apartment}
            onHide={() => setModalShow(false)}
          />
          <Button className="no-button-style" onClick={handleShow}>
            Delete
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
          <h2>Premium Stay in {apartment.location}</h2>
          <div className="reviews-part mt-3 pb-2">
            <div>
              <p className="pe-2"> {apartment.maxGuests} guests</p>
              <span>.</span>
              <p className="mx-2">3 bedrooms</p>
              <span>.</span>
              <p className="mx-2">4 beds</p>
              <span>.</span>
              <p className="mx-2">5.5 baths</p>
            </div>
          </div>
          <div className="reviews-part bold-text pb-2">
            <div>
              <p className="pe-2">
                <FaStar /> {apartment.rating}
              </p>
              <span>.</span>
              <p className="mx-2 link">{apartment.reviews} reeviews</p>
            </div>
          </div>

          <hr className="me-5" />
          <div className="host-part pt-2 pb-2">
            <img src={apartment.host.imageUrl} alt="" />
            <div className="ms-3">
              <h6 className="name-host">Hosted by {apartment.host.name}</h6>
              <div className="reviews-part ">
                <div>
                  <p className="">Superhost</p>
                  <span className="mx-2">.</span>
                  <p className="">4 years hosting</p>
                </div>
              </div>
            </div>
          </div>
          <hr className="me-5" />

          <div className="block-logo-text mb-3 mt-5">
            <img src={Calendar} alt="" className="me-3" />
            <div>
              <p className="black-info">Free cancellation 24h before</p>
            </div>
          </div>
          <div className="block-logo-text mb-3">
            <img src={Location} alt="" className="me-3" />
            <div>
              <p className="black-info">Great location</p>
              <p>100% of recent guests gave the location a 5-star rating.</p>
            </div>
          </div>
          <div className="block-logo-text mb-5">
            <img src={Medal} alt="" className="me-3" />
            <div>
              <p className="black-info">{apartment.host.name} is a Superhost</p>
              <p>Superhosts are experienced, highly rated Hosts.</p>
            </div>
          </div>
          <hr className="me-5" />

          <div className="mt-5 block-message me-5 mb-5">
            Some info has been automatically translated.{" "}
            <p className="link bold-text">Show original</p>
          </div>
          <p className="normal-text mb-4">{apartment.description}</p>

          <Button className=" no-button-style  mb-5">Show more {">"} </Button>
          <hr className="me-5" />
        </div>
        <div className=" col-sm-12 col-md-4 col-lg-4 sticky">
          <div className="card-total">
            <h2 className="title-price pb-2">
              € {apartment.price} <span className="">night</span>
            </h2>
            <Form.Select aria-label=" " className="first-select">
              <option>Nights </option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
            <Form.Select className=" second-select mb-3">
              <option>Guests</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
            <Button className="no-reserve-btn mb-3">No Reserve</Button>

            <p className="normal-text justify-content-center mb-3 d-flex">
              {" "}
              You won´t be charged yet
            </p>

            <div className="price-night mb-3 d-flex normal-text justify-content-between">
              <p className="link">€ 1000 x 5 night</p>
              <p>€ 800</p>
            </div>
            <div className="price-fee mb-3 d-flex normal-text justify-content-between">
              <p className="link">fakebnb service fee</p>
              <p>€ 800</p>
            </div>
            <div className="price-taxes mb-3 d-flex normal-text justify-content-between">
              <p className="link">Taxes</p>
              <p>€ 26</p>
            </div>
            <hr />
            <div className="price-taxes d-flex bold-text justify-content-between">
              <p>Total</p>
              <p>€ 26</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-5">
        <div>
          <p className="normal-text">
            Terms of Service Users outside of the EEA, UK, and Australia Section
            22 of these Terms contains an arbitration agreement and class action
            waiver that apply to all claims brought against Airbnb in the United
            States. Please read them carefully. Last Updated: January 25, 2024
            Thank you for using Airbnb! These Terms of Service (“Terms”) are a
            binding legal agreement between you and Airbnb that govern the right
            to use the websites, applications, and other offerings from Airbnb
            (collectively, the “Airbnb Platform”). When used in these Terms,
            “Airbnb,” “we,” “us,” or “our” refers to the Airbnb entity set out
            on Schedule 1 with whom you are contracting. The Airbnb Platform
            enables users (“Members”) to publish, offer, search for, and book
            services. Members who publish and offer services are “Hosts” and
            Members who search for, book, or use services are “Guests.” Hosts
            offer accommodations (“Accommodations”), activities, excursions, and
            events (“Experiences”), and a variety of travel and other services
            (collectively, “Host Services,” and each Host Service offering, a
            “Listing”). As the provider of the Airbnb Platform, Airbnb does not
            own, control, offer or manage any Listings or Host Services. Airbnb
            is not a party to the contracts entered into directly between Hosts
            and Guests, nor is Airbnb a real estate broker, travel agency, or
            insurer. Airbnb is not acting as an agent in any capacity for any
            Member, except as specified in the Payments Terms of Service
            (“Payment Terms”). To learn more about Airbnb’s role see Section 15.
            We maintain other terms and policies that supplement these Terms
            like our Privacy Policy, which describes our collection and use of
            personal data, and our Payments Terms, which govern any payment
            services provided to Members by the Airbnb payment entities
            (collectively "Airbnb Payments").
          </p>
          <p className="normal-text mt-5">
            Privacy Policy At Airbnb, we prioritize the privacy and security of
            our community members. This Privacy Policy outlines how we collect,
            use, disclose, and protect your personal information when you use
            our platform and services. Information We Collect When you create an
            Airbnb account or use our services, we collect various types of
            information to provide and improve our platform. This includes:
            Account Information: When you sign up for an account, we collect
            your name, email address, phone number, and other details necessary
            to create and manage your account. Booking and Listing Information:
            When you make a reservation or list a property, we collect
            information such as your travel dates, payment details, and property
            details. Communications: We may collect information from your
            communications with other users or with Airbnb support, including
            messages, chats, and call recordings. Usage Information: We collect
            data about how you interact with our platform, including your
            browsing activity, searches, clicks, and preferences. Device and
            Location Information: We collect information about the devices you
            use to access Airbnb and your approximate location based on IP
            address or mobile device data. How We Use Your Information We use
            the information we collect for various purposes, including:
            Providing Services: To facilitate bookings, payments, and
            communication between users. Improving and Personalizing: To analyze
            usage patterns, personalize your experience, and develop new
            features and services. Communications: To send you notifications,
            updates, and marketing communications based on your preferences.
            Safety and Security: To detect and prevent fraud, abuse, and other
            unauthorized activities. Legal Compliance: To comply with legal
            obligations and respond to legal requests. Information Sharing We
            may share your information with third parties in the following
            circumstances: With Other Users: We may share your information with
            other users involved in your bookings or interactions on Airbnb.
            Service Providers: We may share your information with third-party
            service providers who assist us in providing and improving our
            services. Business Transfers: In the event of a merger, acquisition,
            or sale of assets, your information may be transferred to another
            company. Legal Compliance: We may disclose your information to
            comply with legal obligations or respond to legal requests from
            authorities. Your Choices You have options to control how your
            information is used and shared on Airbnb: Account Settings: You can
            manage your account settings and preferences to control
            notifications and privacy settings. Communication Preferences: You
            can choose to opt out of certain communications or marketing emails.
            Cookies and Tracking: You can adjust your browser settings to reject
            cookies or limit tracking. Data Security We take measures to protect
            your information from unauthorized access, disclosure, or
            alteration. This includes encryption, secure storage, and regular
            security audits. Changes to this Policy We may update this Privacy
            Policy from time to time. We will notify you of any material changes
            and seek your consent if required by law. Contact Us If you have any
            questions or concerns about this Privacy Policy or our data
            practices, please contact us at privacy@airbnb.com.
          </p>
        </div>
      </div>

      {/* MODAL NORMAL DELETE */}
      <Modal
        show={show}
        onHide={handleClose}
        size="lg"
        // aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => handleDelete(id)}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default DetailPage;
