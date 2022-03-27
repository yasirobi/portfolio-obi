import React from 'react'
import { Link } from 'react-router-dom'
import { isAuthenticated } from '../auth'
import '../styles/admin.css'


const AdminDashboard = () => {
    const {user: { name, email, role}} = isAuthenticated()

    const adminLinks = () => (
        <div className="card">
                <h4 className="card-header">Admin links</h4>
                 <ul className="list-group">
                     <li className="list-group-item">
                         <Link className="nav-link" to="/admin/create/category">create category</Link>
                     </li>
                     <li className="list-group-item">
                     <Link className="nav-link" to="/admin/manage/categories">manage categories</Link>
                     </li>
                     <li className="list-group-item">
                     <Link className="nav-link" to="/admin/create/project">create projects</Link>
                     </li>
                     {/* <li className="list-group-item">
                     <Link className="nav-link" to="/admin/project/update">update projects</Link>
                     </li> */}
                     <li className="list-group-item">
                     <Link className="nav-link" to="/admin/manage/projects">manage projects</Link>
                     </li>
                 </ul>
            </div>
    )

   const adminDetails = () => (
       <div className="card">
           <h4 className="card-header">Admin profile info</h4>
               <span>{name}</span>
              <span>{email}</span>
              <span>{ role == 1 ? 'Admin': 'register user' }</span>
        </div>
    )
  return(
    <div className="container adminbox">
        <div className="row">
            <div className="col-md-4">
             {adminLinks()}
            </div>
            <div className="col-md-8">
               {adminDetails()} 
            </div>
        </div>
    </div>
   )

 }

export default AdminDashboard