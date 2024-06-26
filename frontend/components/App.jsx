import React from "react";
import HeaderContainer from './nav/header_container';
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import SignupContainer from './session/signup_container';
import LoginContainer from './session/login_container';
import { Route, Switch } from 'react-router-dom';
import MainNavContainer from "./nav/main_nav_container";
import ProjectIndexContainer from "./projects/project_index_container";
import ProjectShowContainer from "./projects/project_show_container"; 
import NewProjectIndexContainer from "./projects/create/new_project_index_container"; 
import EditProjectFormContainer from "./projects/edit/edit_project_form_container";
import EditProjectIndexContainer from "./projects/edit/edit_project_index_container";
import EditStepFormContainer from "./projects/edit/edit_step_form_container";
import CreateProject from "./projects/create/new_project_landing";
import NotFound from "./not_found";
import Main from "./main";


const App = () => (
  <div>
    <HeaderContainer />
    <MainNavContainer />
    <Switch>
      <AuthRoute path="/signup" component={SignupContainer} />
      <AuthRoute path="/login" component={LoginContainer} />
      <Route exact path="/" component={Main} />
      <ProtectedRoute path="/projects/new" component={NewProjectIndexContainer} />
      <Route path="/projects/create" component={CreateProject} />
      <ProtectedRoute exact path="/projects/:projectId/update" component={EditProjectIndexContainer} />
      <ProtectedRoute exact path="/projects/:projectId/edit" component={EditProjectFormContainer} />
      <ProtectedRoute exact path="/steps/:stepId/edit" component={EditStepFormContainer} />
      <Route exact path="/search/:query" component={ProjectIndexContainer} />
      <Route exact path="/projects/:projectId" component={ProjectShowContainer} />
      <Route exact path="/projects" component={ProjectIndexContainer} />
      <Route component={NotFound}/>
    </Switch>
  </div>
);

export default App;
