import React from 'react';
import "../styles/header.css";
import IIEC_logo from "../asserts/images/IIEC_logo.png";
import { BiLogOut } from "react-icons/bi";
// import { Navigate } from "react-router-dom";

function Header() {
  const logout = () => { 
    console.log("hi");
    localStorage.clear();
    window.location.reload();
    //  return <Navigate to="/login" />;
  }
  return (
    <div className="header_div">
      <div>
        <img src={IIEC_logo} alt=""></img>
      </div>
      <div className='headerplhlddiv'>
        <input className="search_pd" placeholder="Search"></input>
        <BiLogOut onClick={() => logout()} className="logouticon" />
        <p>logout</p>
      </div>
    </div>
  );
}

export default Header
