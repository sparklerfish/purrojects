import React from 'react';
import { connect } from "react-redux";
import EditStepForm from "./edit_step_form";
import { updateStep } from '../../actions/step_actions';
// import { openModal, closeModal } from "../../actions/modal_actions";

const mapStateToProps = (state, ownProps) => ({
    currentUser: state.entities.users[state.session.id],
    step: state.entities.steps[ownProps.match.params.stepId],
    stepNo: ((Object.values(state.entities.steps).indexOf(state.entities.steps[ownProps.match.params.stepId]) + 1))
})

const mapDispatchToProps = dispatch => ({
    action: (step) => dispatch(updateStep(step))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditStepForm)