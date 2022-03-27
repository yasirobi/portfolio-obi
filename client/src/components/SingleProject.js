import React,{ useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { getProject, getRelatedProject } from '../core/Api';
import { IconContext } from "react-icons/lib";
import SingleProjectBanner from './SingleProjectBanner';
import ProjectCard from '../components/ProjectCard'
import { API } from "../configUrl";
import ShowImage from '../core/ShowImage';
import '../styles/singleProject.css'



const SingleProject = (props) => {
const [project, setProject] = useState([]);
const [error, setError] = useState(false);
const [relatedProject, setRelatedProject] = useState([]);


  

  const loadSingleProject = async projectId => {
   try {
      const data = await getProject(projectId) 
      if (data.error) {
        setError(data.error);
    }else {
        setProject(data);
        // fetch related products
        getRelatedProject(data._id).then(data => {
            console.log('related', data);
            if (data.error) {
                setError(data.error);
            } else {
                setRelatedProject(data);
            }
        });
    }
   } catch (error) {
       console.log(error);
   }


   
  }

  
    useEffect(() => {
        const projectId = props.match.params.projectId;
       loadSingleProject(projectId)

    }, [props]);


    
  return(
    <>
    <SingleProjectBanner/>
    <IconContext.Provider value={{ color: "red" }}>
    <Container className='mt-3'>
        <Row>
            <Col md={5}>
                <div className="singleProject-image">
                <ShowImage item={project} url="project"  />
                {/* <img
            src={`${API}/project/photo/${project.projectId}`}
            alt={project.name}
        /> */}
                </div>
            </Col>
            <Col md={7}>
                <div className="singleProject-box">
                    <h2>{project.name}</h2>
                    <div className="singleProject-desc">
                        <p>{project.body}</p>
                    </div>
                    
                    <div className="singleProject-links">
                        <Link to={`${project.link1}`} ><i className="fas fa-eye"></i>
                         live demo
                        </Link>
                        <Link to={`${project.link2}`} ><i className="fab fa-github"></i> github code</Link>
                    </div>
                </div>
            </Col>
        </Row>
    </Container>


<br /><br /><br />
    <Container>
        <h4 className='text-white'>Related projects</h4>
        <Row>
        
                    {relatedProject.map((p, i) => (
                        <Col md={4} key={i}>
                         
                              <ProjectCard project={p} />
                           
                        </Col>
                    ))}
            
        </Row>
    </Container>
    </IconContext.Provider>
  
    </>  
  ) 
};

export default SingleProject;
