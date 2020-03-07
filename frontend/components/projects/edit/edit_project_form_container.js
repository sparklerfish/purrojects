import React from 'react';
import { connect } from "react-redux";
import EditProjectForm from "./edit_project_form";
import { updateProject } from '../../../actions/project_actions';

const mapStateToProps = (state, ownProps) => ({
    currentUser: state.entities.users[state.session.id],
    project: state.entities.projects[ownProps.match.params.projectId]
})

const mapDispatchToProps = dispatch => ({
    action: (project) => dispatch(updateProject(project))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditProjectForm)