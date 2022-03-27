import React from 'react';
import contactImage from '../image/contactme.svg'
import '../styles/contact.css'
import { Link } from 'react-router-dom'

const ContactBanner = () => {
  return(
    <>
     <div className="contact-hero">
  <div className="container contact-banner-container">
    <div className="row d-flex justify-content-center align-items-center">
      
      <div className="col-lg-7 col-md-8 order-2 order-lg-1 order-md-1">
        <div className="contact-banner-items">
       <h3>hi i am</h3>
          <h2>obaidullah totakhil</h2>
          <h1>a fast Learner web developer</h1>
          <p>I wellcome you to contact me for more details. i look forward to discuss with you regarding the roles . </p>

         
        </div>
         <div className="contact-banner-items-btns">
            <Link to="/projects" className="btns btn1 mr-4">projects</Link>
         </div>
        </div>
     
      <div className="col-lg-5 col-md-4 order-1 order-lg-2 order-md-2">
        <div className="contact-banner-image-box">
          <img src={contactImage} alt="contactimage" />
        </div>
        
      </div> 
    </div>
    </div>
  </div>
    </>  
  ) 
};

export default ContactBanner;
