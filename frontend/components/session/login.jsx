import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from '../footer/footer';

const Login = props => {
  const [creds, setCreds] = useState({
    username: "",
    password: ""
  })

  useEffect(() => {
    props.clearErrors();
    window.scrollTo(0, 0);
  }, [])
  
  const handleInput = (e) => {
    setCreds({ ...creds, [e.target.name]: e.target.value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    props.login(creds);
    if (!props.errors) {
      (setTimeout(() => props.history.goBack(), 100))
    }
  }

  const demoLogin = (e) => {
    e.preventDefault();
    props.login({
      username: "guest",
      password: "password"
    });
    props.history.goBack()
  }

  const renderErrors = () => {
    if (props.errors.length > 0) {
      return (
        <ul className="session-errors">
          {props.errors.map((error, i) => (
            <li key={`error-${i}`}>{error}</li>
          ))}
        </ul>
      );
    } else {
      return null;
    }
  }

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
                    placeholder="Username"
                    type="text"
                    value={creds.username}
                    onChange={handleInput("username")}
                  />
                </label>
                <br />
                <label>
                  <input
                    className="session-input"
                    placeholder="Password"
                    type="password"
                    value={creds.password}
                    onChange={handleInput("password")}
                  />
                </label>
                <br />
                <br />
                {renderErrors()}
                <button className="session-button" onClick={handleSubmit}>
                  Login
                </button>
                <button
                  className="session-button demo"
                  onClick={demoLogin}
                >
                  Demo User
                </button>
                <p>
                  <br />
                  New to Purrojects? <Link to="/signup">Sign Up »</Link>
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

export default Login;
