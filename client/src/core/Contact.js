import React, { useState } from "react";
import ContactBanner from "../components/ContactBanner";
import "../styles/contact.css";
import { send } from "emailjs-com";
import { toast } from "react-toastify";
import { Col, Container, FloatingLabel, Form, Row } from "react-bootstrap";
import { FaFacebookF } from 'react-icons/fa'
import { IconContext } from "react-icons/lib";
import { SiGmail } from 'react-icons/si'
import { AiFillLinkedin, AiOutlineTwitter } from 'react-icons/ai'

const Contact = () => {
  const [sender_name, set_sender_name] = useState("");
  const [sender_email, set_sender_email] = useState("");
  const [message, set_message] = useState("");

  const handleName = (e) => {
    set_sender_name(e.target.value);
  };

  const handleEmail = (e) => {
    set_sender_email(e.target.value);
  };

  const handleMessage = (e) => {
    set_message(e.target.value);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    send(
      "service_kt57ewp",
      "template_zpawvhs",
      { sender_name, sender_email, message },
      "user_1u113VVanZeLMmS9380Ue"
    )
      .then((res) => {
        //  console.log('message', res.status, res.text);
        toast.success("thank you for contacting me");
      })
      .catch((err) => {
        toast.err(err);
      });
    set_sender_email("");
    set_message("");
    set_sender_name("");
  };



  return (
    <>
      <ContactBanner />
      <IconContext.Provider value={{ color: "#24b273" }}>
      <br/>
      <h2 className="contact-title">get in touch</h2>
      <div className="underline2"></div>
      <Container className="c">
        <Row className="d-flex justify-contents-center align-items-center">
          <Col md={5}> 
          <div className="content-box">
             <div className="c-title">
               <h1>you'r wellcome to contact me</h1>
             </div>
             <div className="c-desc ">
               <p>you are most wellcome to contact me at any time,
                 i would be pleased to hear you.
               </p>
               <span>have a good day ! 🙋  </span>
             </div>

             <div className="c-social">
              <span><FaFacebookF/></span>
              <span><SiGmail/></span>
              <span><AiFillLinkedin/></span>
              <span><AiOutlineTwitter/></span>
             </div>
          </div>
          </Col>
          <Col md={7}>
            <Form className="contact-form" onSubmit={sendEmail}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  className="inputs"
                  placeholder="Your Name"
                  value={sender_name}
                  onChange={handleName}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>your email</Form.Label>
                <Form.Control
                  type="text"
                  className="inputs"
                  placeholder="Your Email"
                  value={sender_email}
                  onChange={handleEmail}
                  required
                />
              </Form.Group>
              <Form.Label>message</Form.Label>
              <FloatingLabel controlId="floatingTextarea2">
                <Form.Control
                  as="textarea"
                  placeholder="Leave a comment here"
                  style={{ height: "100px" }}
                  value={message}
                  onChange={handleMessage}
                  className="inputs"
                  required
                />
              </FloatingLabel>
              <input type="submit" className="contact-btn contact-btn1" value='submit' / >
            </Form>
          </Col>
        </Row>
      </Container>
      </IconContext.Provider>
    </>
  );
};

export default Contact;
