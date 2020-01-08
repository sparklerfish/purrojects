import React from "react";
import HeaderContainer from './nav/headerContainer';
import { AuthRoute } from "../util/route_util";
import SignupContainer from './session/signupContainer';
import LoginContainer from './session/loginContainer';

const App = () => (
  <div>
    <HeaderContainer />
    <h1>purrojects</h1>
    <AuthRoute path="/signup" component={SignupContainer} />
    <AuthRoute path="/login" component={LoginContainer} />
  </div>
);

export default App;
