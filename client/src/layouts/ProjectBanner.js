import React from "react";
import { Link } from "react-router-dom";
import projectImage from '../image/singleproject.svg'
import '../styles/project.css'



const ProjectBanner = () => {
  return (
    <>
     <div className="project-hero">
  <div className="container home-banner-container">
    <div className="row d-flex justify-content-center align-items-center">
      
      <div className="col-lg-7 col-md-8 order-2 order-lg-1 order-md-1">
        <div className="project-banner-items">
       <h3>hi i am</h3>
          <h2>obaidullah totakhil</h2>
          <h1>a motivated and a patient front-end developer</h1>
          <p>I have designed and built some projects , used different technologies . please view my projects below .</p>

         
        </div>
         <div className="project-banner-items-btns">
            <Link to="/about" className="btns btn1 mr-4">about me</Link>
         </div>
        </div>
     
      <div className="col-lg-5 col-md-4 order-1 order-lg-2 order-md-2">
        <div className="project-banner-image-box">
          <img src={projectImage} alt="project-image" />
        </div>
        
      </div> 
    </div>
    </div>
  </div>
    </>
  );
};

export default ProjectBanner;
