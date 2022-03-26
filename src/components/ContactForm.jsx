import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import emailjs from "emailjs-com";
import "./ContactUs.css";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const submit = () => {
    if (name && email && message) {
      const serviceId = "service_id";
      const templateId = "template_id";
      const userId = "user_id";
      const templateParams = {
        name,
        email,
        message,
      };

      emailjs
        .send(serviceId, templateId, templateParams, userId)
        .then((response) => console.log(response))
        .then((error) => console.log(error));

      if (isValidEmail(email)) {
        setName("");
        setEmail("");
        setMessage("");
        alert("Thank you for your message, we will be in touch in no time!");
      } else {
        alert("Please enter a valid email address");
      }
    } else {
      alert("Please fill in all fields.");
    }
  };

  const isValidEmail = (email) => {
    const regex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(String(email).toLowerCase());
  };

  return (
    <div className="contact-form">
      <TextField
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <TextField
        type="email"
        placeholder="Your email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        placeholder="Your message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        multiline
        rows={4}
      ></TextField>
      <Button variant="outlined" onClick={() => submit()}>
        Send Message
      </Button>
    </div>
  );
};

export default ContactForm;
