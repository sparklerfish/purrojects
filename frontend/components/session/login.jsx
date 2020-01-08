import React from "react";

class Login extends React.Component {
  componentDidMount() {
    this.props.clearErrors()
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

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>{error}</li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="session-image">
        <div className="dimmed">
          <div className="sessionbox">
            <h1>Log In</h1>
            <form>
              <label>
                <input
                  placeholder="Username"
                  type="text"
                  value={this.state.username}
                  onChange={this.handleInput("username")}
                />
              </label>
              <br />
              <label>
                <input
                  placeholder="Password"
                  type="password"
                  value={this.state.password}
                  onChange={this.handleInput("password")}
                />
              </label>
              <br />
              {this.renderErrors()}
              <button onClick={this.handleSubmit}>Log In</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
