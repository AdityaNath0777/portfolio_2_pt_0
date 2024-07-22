import React, { useEffect, useState } from "react";
import "./contact.css";
import Button from "../Button";
import { myPic } from "../../assets";
import "aos/dist/aos.css";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [contactData, setContactData] = useState([
    { name: "", email: "", message: "" },
  ]);

  const [error, setError] = useState({
    name: false,
    email: false,
    message: false,
  });

  const handleContactSumit = (e) => {
    e.preventDefault();

    // Name Validation test
    if (formData.name.trim() === "") {
      setError((prev) => ({
        ...prev,
        name: true,
      }));
    }

    // email validation test
    let emailRegEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (emailRegEx.test(formData.email)) {
      setError((prev) => ({
        ...prev,
        email: true,
      }));
    }

    // message validation test
    if (formData.message.trim() == "") {
      setError((prev) => ({
        ...prev,
        message: true,
      }));
    }

    let isValid = !(error.name || error.email || error.message);
    if (isValid) {
      const validatedData = { ...formData };
      setContactData((prev) => [...prev, validatedData]);
    } else {
      alert("Please Enter valid inputs");
    }

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const [aosOnce, setAosOnce] = useState("false")

  // useEffect(() => {
  //   Aos.init({
  //     once: false,
  //     duration: 1000
  //   })
  // }, []);

  return (
    <section id="contact" className="min-h-screen px-6">
      <h2 className="text-4xl font-bold text-slate-900 py-10">CONTACT</h2>
      <div className="contact-container">
        <div data-aos="zoom-out" data-aos-anchor-placement="top-bottom" data-aos-duration="1000" className="w-full">
          <img src={myPic} alt="contact img" className="w-3/5 mx-auto" />
        </div>
        <form
          onSubmit={handleContactSumit}
          data-aos="zoom-out"
          data-aos-duration="1000"
          className="grid grid-cols-1 gap-4 w-11/12  mx-auto contact-form"
        >
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={(e) => handleInputChange(e)}
            id="contact-form-name"
            placeholder="Enter Your Name"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={(e) => handleInputChange(e)}
            id="contact-form-mail"
            placeholder="Enter Your Email"
          />
          {/* className="h-72  text-wrap" */}
          <textarea
            type="textarea"
            rows={10}
            name="message"
            value={formData.message}
            onChange={(e) => handleInputChange(e)}
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
