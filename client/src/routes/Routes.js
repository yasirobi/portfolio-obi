import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AdminRoute from '../auth/AdminRoute.js'
import PrivateRoute from '../auth/PrivateRoute.js'
import AdminDashboard from '../core/AdminDashboard.js'
import UserDashboard from '../core/UserDashboard.js'
import Home from '../core/Home.js'
import Menu from '../core/Menu.js'
import Signin from '../user/Signin.js'
import Signup from '../user/Signup.js'
import AddCategory from '../admin/AddCategory.js';
import AddProject from '../admin/AddProject.js';
import Projects from '../core/Projects.js';
import SingleProject from '../components/SingleProject.js';
import Footer from '../components/Footer.js';
import CvResume from '../core/CvResume.js';
import Contact from '../core/Contact.js';
import ManageProjects from '../admin/ManageProjects.js';
import ManageCategories from '../admin/ManageCategories.js';
import UpdateProject from '../admin/UpdateProject';
import UpdateCategory from '../admin/UpdateCategory.js';





const Routes = () => {
  return(
      <>
    <BrowserRouter>
    <ToastContainer/>
    <Menu />
      <Switch>
      <Route path='/signup' exact component={ Signup } />
      <Route path='/signin' exact component={ Signin } />
      <Route path='/' exact component={ Home} />
      <Route path='/projects' exact component={ Projects } />
      <Route path='/cv-resume' exact component={ CvResume } />
      <Route path='/contact' exact component={ Contact } />
      <Route path='/project/:projectId' exact component={ SingleProject } />
      <PrivateRoute path="/user/dashboard" exact component={ UserDashboard } />
      <AdminRoute path="/admin/dashboard" exact component={ AdminDashboard } />
      <AdminRoute path="/admin/create/category" exact component={ AddCategory } />
      <AdminRoute path="/admin/create/project" exact component={ AddProject } />
      <AdminRoute path="/admin/project/update/:projectId" exact component={ UpdateProject  } />
      <AdminRoute path="/admin/manage/projects" exact component={ ManageProjects } />
      <AdminRoute path="/admin/manage/categories" exact component={ ManageCategories } />
      <AdminRoute path="/admin/category/update/:categoryId" exact component={ UpdateCategory } />
      /admin/category/update/
      </Switch>

      <Footer/>
    </BrowserRouter>
    </>
   )

 }

export default Routes