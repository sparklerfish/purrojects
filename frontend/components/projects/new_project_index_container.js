import React from 'react';
import { createStep } from "../../actions/step_actions";
import { connect } from "react-redux";
import NewProjectIndex from "./new_project_index";
import { openModal, closeModal } from "../../actions/modal_actions";
import { requestProject } from '../../actions/project_actions';

const mapStateToProps = (state) => ({
    currentUser: state.entities.users[state.session.id],
    project: { title: "", body: "", author_id: state.session.id}, 
    newProjectId: localStorage.getItem('newProjectId'),
    steps: state.entities.steps
})

const mapDispatchToProps = dispatch => ({
    action: (project) => dispatch(updateProject(project)),
    openModal: modal => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal()),
    createStep: () => dispatch(createStep()),
    requestProject: (projectId) => dispatch(requestProject(projectId)),
    requestSteps: (projectId) => dispatch(requestSteps(projectId))
});

export default connect(mapStateToProps, mapDispatchToProps)(NewProjectIndex)