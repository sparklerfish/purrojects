import React from "react";
import { Link } from "react-router-dom"
import Footer from "../footer/footer";

class Signup extends React.Component {
  componentDidMount() {
    this.props.clearErrors();
  }

  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  handleInput(type) {
    return e => {
      this.setState({ [type]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createNewUser(this.state);
  }

  renderErrors() {
    if (this.props.errors.length > 0) {
      return (
        <ul className="session-errors">
          {this.props.errors.map((error, i) => (
            <li key={`error-${i}`}>{error}</li>
          ))}
        </ul>
      );
    } else {
      return null;
    }
  }

  render() {
    return (
      <div>
        <div className="session-image">
          <div className="dimmed">
            <div className="sessionbox">
              <center>
                <form>
                  <label>
                    <input
                      className="session-input"
                      type="text"
                      placeholder="Username"
                      value={this.state.username}
                      onChange={this.handleInput("username")}
                    />
                  </label>
                  <br />
                  <label>
                    <input
                      className="session-input"
                      type="text"
                      placeholder="Email"
                      value={this.state.email}
                      onChange={this.handleInput("email")}
                    />
                  </label>
                  <br />
                  <label>
                    <input
                      className="session-input"
                      type="password"
                      placeholder="Password"
                      value={this.state.password}
                      onChange={this.handleInput("password")}
                    />
                  </label>
                  <br />
                  <br />
                  {this.renderErrors()}
                  <button className="session-button" onClick={this.handleSubmit}>
                    Sign Me Up !
                  </button>
                  <p>
                    <br />
                    Already a member? <Link to="/login">Login »</Link>
                  </p>
                </form>
              </center>
            </div>
          </div>
        </div>
      <Footer/>
      </div>
    );
  }
}

export default Signup;