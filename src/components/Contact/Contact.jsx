import React, { useState } from "react";
import "./contact.css";
import { Bio } from "../../constants";
import Button from "../Button";
import { myPic } from "../../assets";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [contactData, setContactData] = useState([]);

  const handleContactSumit = (e) => {
    e.preventDefault();
    alert("raam raam 🙏🏻 bhai sareya ne!!");
  };
  return (
    <section id="contact" className="min-h-screen px-6">
      <h2 className="text-4xl font-bold text-slate-900 py-10">Contact</h2>
      <div className="contact-container">
        <div className="w-full">
          <img src={myPic} alt="contact img" className="w-3/5 mx-auto" />
        </div>
        <form
          onSubmit={handleContactSumit}
          className="grid grid-cols-1 gap-4 w-11/12  mx-auto contact-form"
        >
          <input
            type="text"
            name="name"
            id="contact-form-name"
            placeholder="Enter Your Name"
          />
          <input
            type="email"
            name="email"
            id="contact-form-mail"
            placeholder="Enter Your Email"
          />
          {/* className="h-72  text-wrap" */}
          <textarea
            type="textarea"
            rows={10}
            name="message"
            id="contact-form-msg"
            placeholder="Enter Your Message"
            className="resize-none"
          />
          {/* <div className="submit-contact-btn-container w-full"> */}
          <Button
            className="h-20 border-2 font-semibold border-sky-500 hover:text-sky-500 hover:bg-transparent transition-all ease-linear duration-200 "
            bgColor="bg-sky-500"
          >
            <span>
              Submit Message
              <i class="fa-solid fa-paper-plane ml-2"></i>
            </span>
          </Button>

          {/* </div> */}
        </form>
      </div>
    </section>
  );
};

export default Contact;
