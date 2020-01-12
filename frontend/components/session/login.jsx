import React from "react";
import { Link } from "react-router-dom";

class Login extends React.Component {
  componentDidMount() {
    this.props.clearErrors();
  }

  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: ""
    };
    
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
    this.demoLogin = this.demoLogin.bind(this);
  }

  handleInput(type) {
    return e => {
      this.setState({ [type]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.login(this.state);
  }

  demoLogin(e) {
    e.preventDefault();
    this.props.login({
      username: "guest",
      password: "password"
    });
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
      <div className="session-image">
        <div className="dimmed">
          <div className="sessionbox">
            <center>
              <form>
                <label>
                  <input
                    className="session-input"
                    placeholder="Username"
                    type="text"
                    value={this.state.username}
                    onChange={this.handleInput("username")}
                  />
                </label>
                <br />
                <label>
                  <input
                    className="session-input"
                    placeholder="Password"
                    type="password"
                    value={this.state.password}
                    onChange={this.handleInput("password")}
                  />
                </label>
                <br />
                <br />
                {this.renderErrors()}
                <button className="session-button" onClick={this.handleSubmit}>
                  Login
                </button>
                <button
                  className="session-button demo"
                  onClick={this.demoLogin}
                >
                  Demo User
                </button>
                <p>
                  <br/>
                  New to Purrojects? <Link to="/signup">Sign Up >></Link>
                </p>
              </form>
            </center>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
