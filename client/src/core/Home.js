import React, { useState, useEffect } from "react";
import About from "../layouts/About";
import HomeBanner from "../layouts/HomeBanner";
import Services from "../layouts/Services";
import MetaData from "../layouts/MetaData";
import { getProjects } from "./Api";
import ProjectCard from "../components/ProjectCard";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import { serviceList } from "../layouts/data";

function Home() {
  const [projectByDone, setProjectByDone] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    loadProjectsByDone();
  }, []);

  const loadProjectsByDone = async () => {
    try {
      const data = await getProjects("view", "desc");
      console.log("projects", data);
      if (data.error) {
        setError(data.error);
      } else {
        setProjectByDone(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <MetaData title="Home" />
      <HomeBanner />

      <Container fluid="xs" fluid="sm">
        <div className="service-title">
          <h1>what i do</h1>
          <div className="underline-1"></div>
          <p>
            i do my daily coding practice which gives me more motivations to
            drown and learn more technologies
          </p>
        </div>
      </Container>

      <Container fluid="sm" fluid="xs" fluid="lg">
        <Row className="m-auto">
          {serviceList.map((lists, i) => (
            <Col lg={4} md={4} sm={12} key={i._id}>
              <Services lists={lists} />
            </Col>
          ))}
        </Row>
      </Container>

      <About />

      <Container fluid="sm" fluid="xs">
        <div className="project-done">
          <h1>done projects</h1>
          <div className="underline"></div>
        </div>
        <Row className="m-auto">
          {projectByDone.map((project, i) => {
            return (
              <Col key={i} lg={3} md={6} sm={6} xs={12}>
                <ProjectCard project={project} />
              </Col>
            );
          })}
        </Row>
      </Container>
      <div className="done-project-btn-box">
        <Link className="btn done-project-btn" to="/projects">
          view projects
        </Link>
      </div>
    </>
  );
}

export default Home;
