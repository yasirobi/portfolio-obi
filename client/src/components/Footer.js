import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/footer.css'


const Footer = () => {
  return <div>
      <div className="pt-5 pb-2 footer">
    <div className="container">
      <div className="row">
        <div className="col-lg-5 col-md-5 col-sm-5 col-xs-12 about-company">
          <h2>about portfolio</h2>
          <p className="pr-5">here is my portfolio which i have built with express js and mongoDb</p>
          <p><a href="#"><i className="fa fa-facebook-square mr-1"></i></a><a href="#"><i className="fa fa-linkedin-square"></i></a></p>
        </div>
        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12 links">
          <h4 className="mt-lg-0 mt-sm-3">contents</h4>
            <ul className="m-0 p-0 link">
              <li> <Link to="/">home</Link></li>
              <li> <Link to="/about">about me</Link></li>
              <li> <Link to="">cv & resume</Link></li>
              <li> <Link to="/projects">projects</Link></li>
              <li> <Link to="/contact">contact</Link></li>
              
            </ul>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 location">
          <h4 className="mt-lg-0 mt-sm-4">Location</h4>
          <p>roskilde 4000, copenhagen</p>
          <p className="mb-0"><i className="fa fa-phone mr-3"></i>+45 53843786</p>
          <p><i className="fa fa-envelope-o mr-3"></i>obi.3965@gmail.com</p>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col copyright">
            <div className="cpy">
            <p>© 2019. All Rights Reserved.</p>
            </div>
          
        </div>
      </div>
    </div>
    </div>
  </div>;
};

export default Footer;
