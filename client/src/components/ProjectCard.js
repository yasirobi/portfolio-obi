import React from "react";
import '../styles/projectCard.css'
import ShowImage from "../core/ShowImage";
import moment from 'moment';
import { Link } from "react-router-dom";




const ProjectCard = ({ project }) => {
  const { name, desc, createdAt } = project;
  return (
    <>
            <div  className="card1">
              <div className="card-header1">
                <ShowImage item={project} url="project"  />
              </div>
              <div className="card-title">
                <h2>{name}</h2>
                <p>{desc.substring(0,50)}</p>
                <Link to="" className="icon-link mr-3">
                  <i className="fa fa-pencil-square-o text-white"></i> by Admin : - {moment(createdAt).fromNow()}
                </Link>
                <div className="blog-card__info">
                  <Link to={`/project/${project._id}`} className="btn-4 btn--with-icon">
                  <i className="btn-icon fa fa-long-arrow-right"></i> VIEW
                    PROJECT
                  </Link>
                </div>
              </div>
            </div>
         
       
    </>
  );
};

export default ProjectCard;
