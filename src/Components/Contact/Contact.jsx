import React, { useState } from "react";
import "./Contact.css";
import user_icon from "../Assets/person.png";
import email_icon from "../Assets/email.png";
import message_icon from "../Assets/msg.jpg";
import emailjs from "@emailjs/browser";

const Contact = () => {

  const [yourname, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = "service_h4glx6q";
    const templateId = "template_gvj189f";
    const publicKey = "iX9Z_7lhbM8pCzdGF";

    const templateParams = {
      from_name: yourname,
      from_email: email,
      to_name: "Dhruv",
      message: message,
    };

    emailjs.send(serviceId,templateId,templateParams,publicKey)
       .then((response) => {
        alert('Email Sent Successfully!',response);
       })
       .catch((error) => {
        console.log('Error Sending Email',error);
       });
  }

  return (
    <div className="container">
      <div className="header">
        <div className="text">Contact Me </div>
        <div className="underline"></div>
      </div>
      <form onSubmit={handleSubmit} className="inputs">
        <div className="input">
          <img src={user_icon} alt="" />
          <input
            type="text"
            placeholder="Enter your name"
            value={yourname}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="input">
          <img src={email_icon} alt="" />
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input">
          <img src={message_icon} alt="" />
          <input
            type="text"
            placeholder="Enter your message"
            maxLength={40}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
      

      <button type="submit" className="submit">Send Message</button>
      </form>
      </div>
  );
};

export default Contact;
