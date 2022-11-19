import React from 'react';
import logo from '../../assets/img/Logo_CasadeChaupi.png';
import { FaInstagram } from 'react-icons/fa';
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className='nav-container'>
      <div className="logo">
        <img className="logo" alt="Logo Casa de Chaupi" src={logo} />
      <div>
        <div className='social-media' />
          <a href='http://instagram.com'>
            <FaInstagram className='social' />
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar