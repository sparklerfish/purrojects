import React from "react";
import HeaderContainer from './nav/headerContainer';
import { AuthRoute } from "../util/route_util";
import SignupContainer from './session/signupContainer';
import LoginContainer from './session/loginContainer';
import { Route } from 'react-router-dom';
import Splash from './splash';
import MainNav from "./nav/mainnav";


const App = () => (
  <div>
    <HeaderContainer />
    <MainNav />
    <AuthRoute path="/signup" component={SignupContainer} />
    <AuthRoute path="/login" component={LoginContainer} />
    <Route exact path="/" component={Splash} />
  </div>
);

export default App;
