import React from 'react';
import "../styles/header.css";
import IIEC_logo from "../asserts/images/IIEC_logo.png"

function Header() {
  return (
    <div className='header_div'>
          <img src={IIEC_logo} alt="" ></img>
          <input className='search_pd' placeholder='Search'></input>
    </div>
  )
}

export default Header
