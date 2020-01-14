import React from "react";
import HeaderContainer from './nav/header_container';
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import SignupContainer from './session/signup_container';
import LoginContainer from './session/login_container';
import { Route, Switch } from 'react-router-dom';
import Splash from './splash';
import MainNav from "./nav/main_nav";
import ProjectIndexContainer from "./projects/project_index_container";
import ProjectShowContainer from "./projects/project_show_container"; 
import NewProjectFormContainer from "./projects/new_project_form_container"; 


const App = () => (
  <div>
    <HeaderContainer />
    <MainNav />
    <Switch>
      <AuthRoute path="/signup" component={SignupContainer} />
      <AuthRoute path="/login" component={LoginContainer} />
      <Route exact path="/" component={Splash} />
      <ProtectedRoute path="/projects/new" component={NewProjectFormContainer} />
      <Route exact path="/projects" component={ProjectIndexContainer} />
      <Route exact path="/projects/:projectId" component={ProjectShowContainer} />
    </Switch>
  </div>
);

export default App;
