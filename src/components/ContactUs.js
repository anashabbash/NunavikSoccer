import React from "react";
import ContactForm from "./ContactForm";
import "./ContactUs.css";

function ContactUs() {
  return (
    <div className="content" id="contactus">
      <h1>Contact Us</h1>
      <div className="flex-container">
        <div className="flex-item">
          If you have any questions or inquiries about services, please fill out
          form below.
          <ContactForm />
        </div>

        <div className="flex-item">
          <h2>location</h2>
          <div className="row">
            <h5>Nunavik Soccer</h5>
          </div>
          <div className="row">
            <h5>251 Platt's Ln, London, ON N6H 4P4, Canada</h5>
          </div>
          <div className="row">
            <h5>647-687-2593</h5>
          </div>
          <h2 style={{ marginTop: "3%" }}>Office Hours</h2>

          <div style={{ display: "flex", marginTop: "3%" }}>
            <h5 style={{ flex: 1 }}>Mon. - Fri.</h5>
            <h5 style={{ flex: 3 }}>8:00 am - 4:30 pm</h5>
          </div>
          <div style={{ display: "flex" }}>
            <h5 style={{ flex: 1 }}>Sat.</h5>
            <h5 style={{ flex: 3 }}>10:00 am - 4:30 pm</h5>
          </div>
          <div style={{ display: "flex" }}>
            <h5 style={{ flex: 1 }}>Sun.</h5>
            <h5 style={{ flex: 3 }}>Closed</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
