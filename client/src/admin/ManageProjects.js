import React, { useState, useEffect } from "react";
import { Button, Container, Row, Table } from "react-bootstrap";
import { getProjectsDelete, getProjectsList } from "./AdminApi";
import "../admin/manageProject.css";

import ShowImage from "../core/ShowImage";
import { API } from "../configUrl";
import { Link } from "react-router-dom";
import { isAuthenticated } from '../auth/'


const ManageProjects = () => {

  const [projects, setProjects] = useState([]);
  const [error, setError] = useState(false);

const { user, token } = isAuthenticated()


  const loadAllProjects = async () => {
    try {
      const data = await getProjectsList();
      console.log("projects", data);
      if (data.error) {
        setError(data.error);
      } else {
        setProjects(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadAllProjects();
  }, []);

  const destroy = async (projectId) => {
  try {
    const data = await getProjectsDelete(projectId,user._id, token)
    if(data.error){
      console.log();
    }else{
      loadAllProjects()
    }
  } catch (error) {
    console.log(error);
  }

  }

  return (
    <>
      <Container>
        <Table className="tables" striped bordered responsive >
          <thead>
            <tr>
              
              <th>Title</th>
              <th>Description</th>
              <th>Github Link</th>
              <th>Projects Link</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((p, i) => (
              <tr key={i} className="text-white">
               
                <td>{p.name}</td>
                <td>{p.desc.substring(0,100)}</td>
                <td>
                  <Link variant='success' to={`/admin/project/update/${p._id}`}>Edit</Link>
                </td>
                <td>
                  <Button variant="danger" onClick={() => destroy(p._id)} 
                  to={`/admin/project/delete/${p._id}`}>Delete</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </>
  );
};

export default ManageProjects;
