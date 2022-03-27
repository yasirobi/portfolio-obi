import React from 'react';
import { Link } from 'react-router-dom';
import homeImage from "../image/homes.svg";
import '../styles/homeBanner.css'



const HomeBanner = () => {

    return (
 <>
       
  <div className="hero">
  <div className="container home-banner-container">
    <div className="row d-flex justify-content-center align-items-center">
      
      <div className="col-lg-7 col-md-8 order-2 order-lg-1 order-md-1">
        <div className="home-banner-items">
       <h3>hi i am</h3>
          <h2>obaidullah totakhil</h2>
          <h1>a motivated and a patient front-end developer</h1>
          <p>I can design and develope nice looking projects depends on the customers expectitions .</p>

         
        </div>
         <div className="home-banner-items-btns">
            <Link to="/projects" className="btns btn1 mr-4">projects</Link>
         </div>
        </div>
     
      <div className="col-lg-5 col-md-4 order-1 order-lg-2 order-md-2">
        <div className="home-banner-image-box">
          <img src={homeImage} alt="home-image" />
        </div>
        
      </div> 
    </div>
    </div>
  </div>


            </>

            ) 
 
};

            export default HomeBanner;
