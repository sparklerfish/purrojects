import React from "react";
import { Link } from "react-router-dom";

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.currentUser) {
      return (
        <div className="navbar">
          <ul>
            <li>
              {this.props.currentUser.username}
            </li>
            <li>
              <a onClick={this.props.logout}>Logout</a>
            </li>
          </ul>
        </div>
      );
    } else {
      return (
        <div className="navbar">
          <ul>
            <li>
              <Link to="/login">Log In</Link>
            </li>    
            <li>
              <Link to="/signup">Sign Up</Link>
            </li>        
          </ul>
        </div>
      );
    }
  }
}

export default Header;
