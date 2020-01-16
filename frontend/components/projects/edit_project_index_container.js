import React from 'react';
import { createStep } from "../../actions/step_actions";
import { connect } from "react-redux";
import EditProjectIndex from "./edit_project_index";
import { requestProject } from '../../actions/project_actions';
import { requestSteps } from '../../actions/step_actions';

const mapStateToProps = (state, ownProps) => ({
    currentUser: state.entities.users[state.session.id],
    project: state.entities.projects[ownProps.match.params.projectId],
    steps: state.entities.steps
})

const mapDispatchToProps = dispatch => ({
    action: (project) => dispatch(updateProject(project)),
    createStep: (step) => dispatch(createStep(step)),
    requestProject: (projectId) => dispatch(requestProject(projectId)),
    requestSteps: (projectId) => dispatch(requestSteps(projectId))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditProjectIndex)