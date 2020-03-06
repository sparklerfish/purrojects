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
            <li><i className="fas fa-small fa-code"></i>Created by: Julie Adams</li>
            <li><i className="fas fa-small fa-cat"></i> Featured Cat: Harry</li>
            <li><a href="https://www.instagram.com/harrytabbycat/" target="_blank"><i className="fab fa-small fa-instagram"></i>Follow Harry on Instagram</a></li>
            </ul>
        </div>
        <div className="about-icons">
          <h3>Find Us</h3>
          <ul>
            <li><a href="https://github.com/sparklerfish/purrojects" target="_blank"><i className='fab fab-large fa-github-square'></i></a></li>
            <li><a href="https://angel.co/julie-adams-7" target="_blank"><i className='fab fab-large fa-angellist'></i></a></li>
            <li><a href="https://www.linkedin.com/in/julie-adams-61767363/" target="_blank"><i className='fab fab-large fa-linkedin'></i></a></li>
          </ul>
        </div>

      </div>
    </div>
  )
}

export default Footer;