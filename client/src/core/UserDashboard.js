import React from "react";
import { Link } from "react-router-dom";
import { isAuthenticated } from "../auth";
import "../styles/userDashboard.css";

const UserDashboard = () => {
  const {
    user: { _id, name, email, role },
  } = isAuthenticated();

  
  const userDetails = () => (
    <ul className="userDetails">
      <li>name: {name}</li>
      <li>email: {email}</li>
      
      <li>role: {role == 1 ? "Admin" : "register user"}</li>
    </ul>
  );
  return (
    <div className="container userDashboard">
      <div className="card p-4">
        <div className=" image d-flex flex-column justify-content-center align-items-center">
       
          
          
          <div className="d-flex flex-row justify-content-center align-items-center mt-3">
            
            {userDetails()}
          </div>
          <div className=" d-flex mt-2">
            
            <Link to={`/user/edit/profile${_id}`} className="btn1">
              Edit Profile
            </Link>
            <Link to={`/user/delete/profile${_id}`} className="btn2">
              delete Profile
            </Link>
          </div>
          <div className="text mt-3">
            
            <span>
              Eleanor Pena is a creator of minimalistic x bold graphics and
              digital artwork.
              <br />
              <br /> Artist/ Creative Director by Day #NFT minting@ with FND
              night.
            </span>
          </div>
          <div className="gap-3 mt-3 icons d-flex flex-row justify-content-center align-items-center">
            
            <span>
              <i className="fa fa-twitter"></i>
            </span>
            <span>
              <i className="fa fa-facebook-f"></i>
            </span>
            <span>
              <i className="fa fa-instagram"></i>
            </span>
            <span>
              <i className="fa fa-linkedin"></i>
            </span>
          </div>
          <div className=" px-2 rounded mt-4 date ">
          
            <span className="join">Joined May,2021</span>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
