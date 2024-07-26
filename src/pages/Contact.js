// pages/Contact.js
import React from "react";
import Banner from "../components/Contact/Banner";
import ContactInfo from "../components/Contact/ContactInfo";
import Form from "../components/Contact/Form";
import Map from "../components/Contact/Map";

const Contact = () => {
  return (
    <div>
      <Banner />
      <ContactInfo />
      <Form />
      <Map />
    </div>
  );
};

export default Contact;
