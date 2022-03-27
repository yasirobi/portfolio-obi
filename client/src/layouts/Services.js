import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/services.css'

const Services = ({lists}) => {
    const { name, fa, text } = lists
  return(
     <>



          <div className="serviceBox">
              <div className="service-icon">
                  <span>{fa}</span>
              </div>
              <div className="service-content">
                  <h3 className="title">{name}</h3>
                  <p className="description">{text}</p>
              </div>
          </div>
    



     </>
  ) 
};

export default Services;
