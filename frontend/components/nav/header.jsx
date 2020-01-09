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
<<<<<<< HEAD
          <ul>
            <li>
              {this.props.currentUser.username}
            </li>
            <li>
              <a onClick={this.props.logout}>Logout</a>
            </li>
          </ul>
=======
          <div className="right-nav">
            <ul>
              <li>
                <button onClick={this.props.logout}>Logout</button>
              </li>
              <li>
                {this.props.currentUser.username}
              </li>
            </ul>
          </div>
>>>>>>> userAuth
        </div>
      );
    } else {
      return (
        <div className="navbar">
          <div className="right-nav">
            <ul>
              <li>
                <Link to="/signup">Sign Up</Link>
              </li>
              <li>|</li>
              <li>
                <Link to="/login">Log In</Link>
              </li>
            </ul>
          </div>
        </div>
      );
    }
  }
}

export default Header;
