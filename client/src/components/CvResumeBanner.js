import React from 'react';
import cvImage from '../image/cv.svg'
import '../styles/cv.css'
import { Link } from 'react-router-dom'

const CvResumeBanner = () => {
  return(
    <>
    <div className="cv-hero">
  <div className="container cv-banner-container">
    <div className="row d-flex justify-content-center align-items-center">
      
      <div className="col-lg-7 col-md-8 order-2 order-lg-1 order-md-1">
        <div className="cv-banner-items">
       <h3>hi i am</h3>
          <h2>obaidullah totakhil</h2>
          <h1>A MOTIVATED AND A PATIENT FRONT-END DEVELOPER</h1>
          <p>I wellcome you to read my resume and i am looking forward to hire me for this position.</p>

         
        </div>
         <div className="cv-banner-items-btns">
            <Link to="/projects" className="btns btn1 mr-4">projects</Link>
         </div>
        </div>
     
      <div className="col-lg-5 col-md-4 order-1 order-lg-2 order-md-2">
        <div className="cv-banner-image-box">
          <img src={cvImage} alt="cvimage" />
        </div>
        
      </div> 
    </div>
    </div>
  </div>
    </>  
  ) 
};

export default CvResumeBanner;
