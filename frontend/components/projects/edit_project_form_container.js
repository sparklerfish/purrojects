import React from 'react';
import { createProject } from "../../util/project_api_util";
// import { createStep } from "../../util/step_api_util";
import { connect } from "react-redux";
import NewProjectForm from "./edit_project_form";
import { openModal, closeModal } from "../../actions/modal_actions";

const mapStateToProps = (state, ownProps) => ({
    currentUser: state.entities.users[state.session.id],
    project: {
        title: "",
        body: "",
        author_id: state.session.id 
    }
})

const mapDispatchToProps = dispatch => ({
    action: (project) => dispatch(updateProject(project)),
    openModal: modal => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(NewProjectForm)