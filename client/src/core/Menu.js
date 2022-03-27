import React, {Fragment,useEffect, useState } from 'react'
import { Link, NavLink, withRouter } from 'react-router-dom'
import { isAuthenticated, signout } from '../auth'
import '../styles/Navbar.css'

 import { IconContext } from "react-icons/lib";



const Navbar = ({history}) => {
    const [ click, setClick ] = useState(false)
     const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)
    const [navbar, setNavbar] = useState(false);


    useEffect(() => {
      window.addEventListener("scroll", changeNavbarBackgroundColor);
     
     
    }, []);
  
    const changeNavbarBackgroundColor = () => {
      // console.log(window.scrollY)
      if (window.scrollY >= 50) {
        setNavbar(true);
      } else {
        setNavbar(false);
      }
    };




  return(
    <Fragment>
       <IconContext.Provider value={{ color: "#fff" }}>
     <nav className={navbar ? "navbar change" : "navbar"}>
        <div className='navbar-container containers'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            portfolio
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <NavLink to='/' className='nav-links' activeClassName="is-active" onClick={closeMobileMenu} exact={true}>
                Home
              </NavLink>
            </li>

            <li className='nav-item'>
              <NavLink to='/projects' className='nav-links' activeClassName="is-active" onClick={closeMobileMenu} exact={true}>
                projects
              </NavLink>
            </li>

            <li className='nav-item'>
              <NavLink to='/cv-resume' className='nav-links' activeClassName="is-active" onClick={closeMobileMenu} exact={true}>
                cv & resume
              </NavLink>
            </li>

            

            <li className='nav-item'>
              <NavLink to='/contact' className='nav-links' activeClassName="is-active" onClick={closeMobileMenu} >
                contact
              </NavLink>
            </li>
            
            {isAuthenticated() && isAuthenticated().user.role === 0 && (
               <li className='nav-item'>
              <NavLink
                to='/user/dashboard'
                className='nav-links' activeClassName="is-active"
                onClick={closeMobileMenu}
              >
               user profile
              </NavLink>
            </li>
            )}

         { isAuthenticated() && isAuthenticated().user.role === 1 && (
               <li className='nav-item'>
              <NavLink
                to='/admin/dashboard'
                className='nav-links' activeClassName="is-active"
                onClick={closeMobileMenu}
              >
                Dashboard
              </NavLink>
            </li>
            )} 
            
            {!isAuthenticated() && (
                <Fragment>
                 <li className='nav-item'>
                 <NavLink className="btn btn-outline"
                 to='/signin'
                 className='nav-links' activeClassName="is-active"
                 onClick={closeMobileMenu} > 
                    sign in
                 </NavLink>
                 </li>
   
                 <li className='nav-item'>
                 <NavLink className="btn btn-outline"
                 to='/signup'
                 className='nav-links' activeClassName="is-active"
                 onClick={closeMobileMenu} > 
                    sign up
                 </NavLink>
               </li>
               </Fragment>
            )}

           
           
           {isAuthenticated() && (
            <li className='nav-item'>
              <NavLink className="btn btn-signout"
              to='/signout'
              onClick={()=> signout(() =>{
                history.push('/')
            })}
              > 
                 sign out
              </NavLink>
            </li>
            )}
            
            
          </ul>
          
        </div>
        
      </nav>
      </IconContext.Provider>
    </Fragment>
   )

 }

export default withRouter(Navbar)







