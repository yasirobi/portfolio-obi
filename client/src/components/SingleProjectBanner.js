import React from 'react';
import singleProject from '../image/singleproject.svg'
import '../styles/singleProject.css'


const SingleProjectBanner = () => {
  return(
    <>
    <div
        id="single-hero"
        className="d-flex justify-content-center align-items-center"
      >
        <div className="single-hero">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-8 order-2 order-lg-1 order-md-1 hero-title">
                <h3>hi here is my built in projects </h3>
                
                <p>I have designed and built a responsive website to all devices with different technologies .</p>

                <a href="/about" className="btns btn1">
                  about Me
                </a>
              </div>

              <div className="col-lg-6 col-md-4 order-1 order-lg-2 order-md-2 single-hero-image">
                <img src={singleProject} alt="image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>  
  ) 
};

export default SingleProjectBanner;
