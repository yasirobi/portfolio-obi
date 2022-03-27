import React,{ useState, useEffect } from 'react';
import { Button, Container, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { isAuthenticated } from '../auth';
import { getCategories } from '../core/Api';
import { getCategoryDelete } from './AdminApi';

const ManageCategories = () => {
   const [categories, setCategories] = useState([]);
   const [error, setError] = useState(false);

const {user, token } = isAuthenticated()
   
const loadAllCategories = async () => {
    try {
        const data = await getCategories()
        if(data.error){
            setError(data.error)
        }else{
            setCategories(data)
        }
    } catch (error) {
        console.log(error);
    }
}

const destroy = async (categoryId) => {
try {
    const data = await getCategoryDelete(categoryId, user._id, token)
    if(data.error){
        setError(data.error)
    }else{
        loadAllCategories()
    }
} catch (error) {
    console.log(error);
}
}


   useEffect(() => {
       loadAllCategories()
   }, []);


  return(
    <>
     <Container>
        <Table className="tables" striped bordered responsive >
          <thead>
            <tr>
              
              <th>Title</th>
              <th>edit</th>
              <th>delete</th>
              
            </tr>
          </thead>
          <tbody>
            {categories.map((c, i) => (
              <tr key={i} className="text-white">
               
                <td>{c.name}</td>
                
                <td>
                  <Link variant='success' to={`/admin/category/update/${c._id}`}>Edit</Link>
                </td>
                <td>
                  <Button variant="danger" onClick={() => destroy(c._id)}  
                  to={`/admin/category/delete/${c._id}`}>Delete</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
  </>
  ) 
};

export default ManageCategories;
