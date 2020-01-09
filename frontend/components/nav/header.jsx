import React from "react";
import { Link } from "react-router-dom";

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  loggedInRightNav() {
    return (
      <div className="right-nav">
        <ul>
          <li>
            <a onClick={this.props.logout}>Logout</a>
          </li>
          <li>|</li>
          <li>Hello, {this.props.currentUser.username}!</li>
        </ul>
      </div>
    );
  }

  loggedOutRightNav() {
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

  render() {
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
        {this.props.currentUser
          ? this.loggedInRightNav()
          : this.loggedOutRightNav()}
      </div>
    );
  }
}


export default Header;
