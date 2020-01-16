import { createStep } from "../../util/step_api_util";
import { connect } from "react-redux";

const mapStateToProps = (state, ownProps) => ({
    currentUser: state.entities.users[state.session.id],
    step: {
        title: "",
        body: "",
        projectId: ownProps.match.params.projectId
    }
})

const mapDispatchToProps = dispatch => ({
    createProject: (project) => dispatch(createProject(project)),
    updateStep: (step) => dispatch(updateStep(step))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectForm)