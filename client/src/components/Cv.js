import React from "react";
import { span, Col, Container, Row } from "react-bootstrap";
import cvImage from "../image/obi1.jpg";
import "../styles/cv.css";
import { FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { AiFillGithub, AiFillPhone } from "react-icons/ai";
import { SiGmail } from "react-icons/si";

const Cv = () => {
  return (
    <>
      <IconContext.Provider value={{ color: "#24b273" }}>
          <div className="cv">
              <h1>my resume</h1>
              <div className="cv-underline"></div>
          </div>
        <Container>
          <Row className="cv-row">
            <Col lg={4} md={4} sm={4} xs={12} className="profile-image">
              <div className="cv-box">
                <div className="cv-box-image">
                  <img src={cvImage} alt="cvimage" />
                </div>
                <div className="cv-box-items">
                  <h1>obaidullah totakhil</h1>
                  <h2>web developer</h2>
                </div>
                <div className="underline-cv-box"></div>
              </div>

              <div className="contact-info">
                <h3>contact info</h3>
                <div className="contact-box">
                <p>
                  <SiGmail /> <span>: - obi.3965@gmail.com</span>
                </p>
                <p>
                  <FaLinkedinIn /> <span>: - obaidullah totakhil</span>
                  </p>
                  <p>
                    <AiFillPhone /> <span>: - 004553843786</span>
                  </p>
                
                <p>
                  <FaTwitter /> <span>: - obi ahmad </span>
                </p>
                </div>
              </div>
               <div className="left-underline"></div>
              <div className="cummunication">
                  <h2>communication skills</h2>
                  <div className="com-underline"></div>
                  <div className="communication-desc">
                      <span className="btn btn-outline btn-sm">English</span>
                      <span className="btn btn-outline btn-sm">Danish</span>
                      <span className="btn btn-outline btn-sm">Pashto</span>
                      <span className="btn btn-outline btn-sm">Persian</span>
                      <span className="btn btn-outline btn-sm">urdu</span>
                      
                  </div>
              </div>

                <div className="hobbies-underline"></div>
              <div className="hobby">
                  <h2>hobbies</h2>
                  <div className="hobby-underline"></div>
                  <div className="hobbies-desc">
                      <span className="btn btn-outline btn-sm">cricket</span>
                      <span className="btn btn-outline btn-sm">social</span>
                      <span className="btn btn-outline btn-sm">fitness</span>
                  </div>
              </div>
            </Col>

            <Col lg={8} md={8} sm={8} xs={12} className="">
              <div className="profile-box">
                <h2>about me</h2>
                <div className="underline-4"></div>
                <div className="profile-box-desc">
                  <p>
                    I am Obi, a passionate,dedicated and a fast learner front-end developer.
                    I graduated from Roskilde Technical college. 
                    I am really excited to work together with other
                    developers for building a maintainable and acceptable web
                    templates, which enhances accessibility and usability for
                    the users. please visit my Github Repositories <a className="links" href="https://github.com/obi3965">visit...</a>
                  </p>
                </div>
              </div>
              <div className="underline-5"></div>

              <div className="experience">
                  <h2>projects experience</h2>
                  <div className="underline-6"></div>
                      <div className="experience-desc">
                        <p> <strong>1 : - </strong> i have built a fullstack butchery shop website with cms panel, which is fully responsive to all devices .</p>
                        <p> <strong>2 : - </strong>i have built many fullstack clones projects such as instagram, linkedin, youtube, netflix. which they are all fully responsive . </p>
                        <p> <strong>3 : - </strong> git. version control for contributing the projects with a team .</p>
                        <p> <strong>4 : - </strong> i have built many secure Rest-Api, and the front-end developer can easily interact with it .</p>
                        <p> <strong>5 : - </strong> for the front-end i use html, css3, bootstrap, react-bootstrap, tailwand css, bulma css. the css frameworks can easily and quickly turn around the projects .</p>
                        <p> <strong>6 : - </strong>for the client side api i always use fetch and axios to display a back-end database on the web page .</p>
                        <p> <strong>7 : - </strong>implementing responsiveness website to all media devices.</p>
                        <p> <strong>8 : - </strong>Creating serverside websites using node js and MongoDB with ejs template engines.</p> 


                      </div> 
              </div>
              <div className="underline-5"></div>
               
               <div className="languages">
                   <h2>technologies skills</h2>
                   <div className="underline-6"></div>
                   <div className="languages-desc">
                       <span className="btn btn-outline btn-sm">Html</span>
                       <span className="btn btn-outline btn-sm">Css</span>
                       <span className="btn btn-outline btn-sm">Tailwand</span>
                       <span className="btn btn-outline btn-sm">Bootstrap</span>
                       <span className="btn btn-outline btn-sm">Bulma</span>
                       <span className="btn btn-outline btn-sm">Style-components</span>
                       <span className="btn btn-outline btn-sm">React-bootstrap</span>
                       <span className="btn btn-outline btn-sm">React Js</span>
                       <span className="btn btn-outline btn-sm">Next Js</span>
                       <span className="btn btn-outline btn-sm">Javascript</span>
                       <span className="btn btn-outline btn-sm">Node Js</span>
                       <span className="btn btn-outline btn-sm">MongoDB</span>
                       <span className="btn btn-outline btn-sm">Rest-Api</span>
                   </div>
               </div>
              
               <div className="underline-8"></div>
              <div className="education">
                  <h2>educations</h2>
                  <div className="underline-7"></div>
                  <div className="education-desc">
                      <p> <strong>a : -</strong> I have one and half year's degree in web development from Roskilde Technical college in Denmark .</p>
                      <p> <strong>b : - </strong>Graduated from high school in kabul afghanistan .</p>
                  
                  </div>
                  
              </div> 
              
            </Col>
          </Row>
        </Container>
      </IconContext.Provider>
    </>
  );
};

export default Cv;
