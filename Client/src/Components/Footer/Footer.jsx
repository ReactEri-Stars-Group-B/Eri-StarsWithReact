
import React from 'react'
import Eri_logo from '../../assets/Logo.png'
import './footer.css'
import { FaFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
function Footer() {
  return (
    <div className='footer'>
    <div className='footercontainer'>
      <img src={Eri_logo} alt="" width='130px' />
      <nav>
        <ul>
        <li>About <label>who we are</label> <label>what we do</label></li>
        <li>Services <label>Our services</label> <label>Prices</label></li>
        <li>Contact <label>How to reach us</label> <label>Our address</label></li></ul>
      </nav>
    </div>
    <hr/>
    <div className='socialmedia'>
    <p>All Rights Reserved. &copy; Eri Stars 2024.</p>
    <div className='icons'>
    <FaFacebook /> <FaTwitter /><FaInstagram /><FaLinkedinIn />
    </div>
    </div>
    </div>
  )
}

export default Footer
