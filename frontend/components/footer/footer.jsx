import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-logo">
          <Link to="/">
            <img src={window.logo_large} height="150px" />
          </Link>
        </div>

        <div className="about">
          <h3>About Us</h3>
            <ul>
              <li>Created by Julie Adams</li>
              <li>Featured Cat: Harry</li>
              <a href="https://www.instagram.com/harrytabbycat/" target="_blank"><li>Follow Harry on Instagram</li></a>
            </ul>
        </div>
        <div className="about-icons">
          <h3>Find Us</h3>
          <ul>
            <li><i className='fab fa-github-square' style={{ fontSize: '36px' }}></i></li>
            <li><i className='fab fa-angellist' style={{ fontSize: '36px' }}></i></li>
            <li><i className='fab fa-linkedin' style={{ fontSize: '36px' }}></i></li>
          </ul>
        </div>

      </div>
    </div>
  )
}

export default Footer;