import React from 'react';
import { connect } from "react-redux";
import EditProjectIndex from "./edit_project_index";
import { requestProject } from '../../../actions/project_actions';
import { requestSteps, createStep, clearSteps, destroyStep } from '../../../actions/step_actions';

const mapStateToProps = (state, ownProps) => ({
    currentUser: state.entities.users[state.session.id],
    project: state.entities.projects[ownProps.match.params.projectId],
    steps: state.entities.steps
})

const mapDispatchToProps = dispatch => ({
    action: (project) => dispatch(updateProject(project)),
    createStep: (step) => dispatch(createStep(step)),
    requestProject: (projectId) => dispatch(requestProject(projectId)),
    requestSteps: (projectId) => dispatch(requestSteps(projectId)),
    clearSteps: () => dispatch(clearSteps()),
    destroyStep: (stepId) => dispatch(destroyStep(stepId))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditProjectIndex)