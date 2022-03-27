import React, { useState, useEffect } from "react";
import ProjectCard from "../components/ProjectCard";
import CheckBox from "../components/CheckBox";
import "../styles/project.css";
import { motion } from "framer-motion/dist/framer-motion"
import { Button, Col, Container, Row } from "react-bootstrap";
import { getCategories, getFilteredProjects } from "./Api";
import ProjectBanner from "../layouts/ProjectBanner";




const Projects = () => {
  const [myFilters, setMyFilters] = useState({
    filters: { category: [] },
  });
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(false);
  const [limit, setLimit] = useState(3);
  const [skip, setSkip] = useState(0);
  const [size, setSize] = useState(0);
  const [filteredResults, setFilteredResults] = useState([]);

  const init = async () => {
    try {
      const data = await getCategories();
      if (data.error) {
        setError(data.error);
      } else {
        setCategories(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    init();
    loadFilteredResults(skip, limit, myFilters.filters);
  }, []);

  const handleFilters = (filters, filterBy) => {
    console.log("SHOP", filters, filterBy);
    const newFilters = { ...myFilters };
    newFilters.filters[filterBy] = filters;
    loadFilteredResults(myFilters.filters);
    setMyFilters(newFilters);
  };

  const loadFilteredResults = async (newFilters) => {
    // console.log(newFilters);
    const data = await getFilteredProjects(skip, limit, newFilters);
    if (data.error) {
      setError(data.error);
    } else {
      setFilteredResults(data.data);
      setSize(data.size);
      setSkip(0);
    }
  };

  const loadMore = async () => {
      let toSkip = skip + limit;
      try {
        const data = await getFilteredProjects(toSkip, limit, myFilters.filters)
        if (data.error) {
            setError(data.error);
        } else {
            setFilteredResults([...filteredResults, ...data.data]);
            setSize(data.size);
            setSkip(toSkip);
        }
      } catch (error) {
          console.log(error);
      }
    
    }

const loadMoreButton = () => (
     size > 0 && size >= limit && (
              <Button className="more-btn loadMore-btn " onClick={loadMore}>load more</Button>
         )
        
        
     )
         
  
  return (
    <>
      <ProjectBanner />
      <Container>
        <div className="project-title">
          <h1>my project collections</h1>
          <div className="project-desc">
            <p>
              i have built several front-end templates and fullstack projects
              for small businesses. including different technologies and secured
              Rest Api using express js and mongoDB databases.
              <strong> please check my projects below...</strong>{" "}
            </p>
          </div>
        </div>
       
        <Row>
          <div className="col-md-8 offset-md-2">
            <div className="project-name-box">
              <CheckBox
                categories={categories}
                handleFilters={(filters) => handleFilters(filters, "category")}
              />
            </div>
          </div>
        </Row>
      </Container>

      <Container>
        <div className="col-12">
          <Row>
            {filteredResults &&
              filteredResults.map((project,i) => (
                <motion.div animate={{ y: 20  }} key={i} className="col-md-4">
                  <ProjectCard  project={project} />
                </motion.div>
              ))}
          </Row>

       
          
         
        </div>   
        <hr className="load-more-border" />
          <div className="load-more-btn-box">
             {loadMoreButton()}
          </div>
        
      </Container> 
      
    </>
  );
};

export default Projects;
