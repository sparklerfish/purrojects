import React from "react";
import HeaderContainer from './nav/header_container';
import { AuthRoute } from "../util/route_util";
import SignupContainer from './session/signup_container';
import LoginContainer from './session/login_container';
import { Route } from 'react-router-dom';
import Splash from './splash';
import MainNav from "./nav/main_nav";


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
