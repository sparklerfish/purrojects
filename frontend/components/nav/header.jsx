import React from "react";
import { Link } from "react-router-dom";

const Header = props => {

  const loggedInRightNav = () => {
    return (
      <div className="right-nav">
        <ul>
          <li>
            <a onClick={props.logout}>Logout</a>
          </li>
          <li>|</li>
          <li>Hello, {props.currentUser.username}!</li>
        </ul>
      </div>
    );
  }

  const loggedOutRightNav = () => {
    return (
      <div className="right-nav">
        <ul>
          <li>
            <Link to="/signup">Sign Up</Link>
          </li>
          <li>|</li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </div>
    );
  }

  return (
    <div className="navbar">
      <div className="left-nav">
        <ul>
          <li>
            <Link to="/">
              <i className="fa fa-home w3-large"></i>
            </Link>
          </li>
          <li>
            Sleep
          </li>
          <li>
            Eat
          </li>
          <li>
            Play
          </li>
        </ul>
      </div>
      {props.currentUser ? loggedInRightNav() : loggedOutRightNav()}
    </div>
  );
}

export default Header;