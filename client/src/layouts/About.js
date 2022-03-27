import React from 'react';
import '../styles/about.css'
import aboutImage from '../image/about2.png'
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
const About = () => {
  return (
    <>
    <div className="about">
        <Container fluid="xs" fluid="sm">
            <div className="m-auto row d-flex justify-content-center align-items-center">
                
               
                <div className="col-md-7 col-lg-7 col-sm-12 col-xs-12">
                    <div className="about-text">
                        <h2>about me</h2>
                         <div className="underline-about-text"></div>
                        <div className="about-desc">
                            <p>i am a patient,dedicated,motivated and a fast learner web developer with a technical 
                                college degree in web development, i have built several 
                                front-end and fullstack responsive templates for small business
                                </p>
                                <p>in my daily life, i am learning new technologies depends on the companies requirements,
                                    so in the future i can be a successfull developer, i love to work as a team and also 
                                    individually and i always use git to track my projects with other developers.
                                  
                                    </p>
                        </div>
                        </div> 
                        <Link to='/about' className='about-btn about-btn1'>read more</Link>
                </div>

                <div className="col-md-5 col-lg-5 col-sm-12 col-xs-12">
                    <div className="about-image">
                        <img src={aboutImage} alt="aboutImage" />
                        </div> 
                </div>
            </div>
        </Container>
       
    </div>
    </> 
  )
};

export default About;