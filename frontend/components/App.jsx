import React from "react";
import HeaderContainer from './nav/headerContainer';
import { AuthRoute } from "../util/route_util";
import SignupContainer from './session/signupContainer';

const App = () => (
  <div>
    <HeaderContainer />
    <h1>purrojects</h1>
    <AuthRoute path="/signup" component={SignupContainer} />
  </div>
);

export default App;
