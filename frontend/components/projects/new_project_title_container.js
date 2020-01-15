import React from 'react';
import { createProject } from "../../actions/project_actions";
// import { createStep } from "../../util/step_api_util";
import { connect } from "react-redux";
import NewProjectTitle from "./new_project_title";
import { closeModal } from '../../actions/modal_actions'
import { clearErrors } from '../../actions/error_actions'

const mapStateToProps = state => ({
    currentUser: state.entities.users[state.session.id],
    project: {
        title: "",
        body: "",
        author_id: state.session.id
    },
    errors: state.errors.project
})

const mapDispatchToProps = dispatch => ({
    createProject: (project) => dispatch(createProject(project)),
    closeModal: () => dispatch(closeModal()),
    clearErrors: () => dispatch(clearErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(NewProjectTitle)