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
            <button onClick={this.props.logout}>Logout</button>
          </li>
          <li>{this.props.currentUser.username}</li>
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
        {this.props.currentUser
          ? this.loggedInRightNav()
          : this.loggedOutRightNav()}
      </div>
    );
  }
}


export default Header;
