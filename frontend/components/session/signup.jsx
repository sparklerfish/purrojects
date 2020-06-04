import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"
import Footer from "../footer/footer";

const Signup = props => {
  useEffect(() => {
    props.clearErrors();
    window.scrollTo(0, 0);
  }, [])

  const [creds, setCreds] = useState({
    username: "",
    password: "",
    email: ""
  })

  const handleInput = (e) => {
    setCreds({ ...creds, [e.target.name]: e.target.value });
  }

  const handleSubmit = e => {
    e.preventDefault();
    props.createNewUser(creds);
    if (!props.errors) {
      (setTimeout(() => props.history.goBack(), 100))
    }
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
    <>
      <div className="session-image">
        <div className="dimmed">
          <div className="sessionbox">
            <center>
              <form>
                <label>
                  <input
                    className="session-input"
                    name="username"
                    type="text"
                    placeholder="Username"
                    value={creds.username}
                    onChange={handleInput}
                  />
                </label>
                <br />
                <label>
                  <input
                    className="session-input"
                    name="email"
                    type="text"
                    placeholder="Email"
                    value={creds.email}
                    onChange={handleInput}
                  />
                </label>
                <br />
                <label>
                  <input
                    className="session-input"
                    name="password"
                    type="password"
                    placeholder="Password"
                    value={creds.password}
                    onChange={handleInput}
                  />
                </label>
                <br />
                <br />
                {renderErrors()}
                <button className="session-button" onClick={handleSubmit}>
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
    </>
  );
}

export default Signup;