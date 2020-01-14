import { createProject } from "../../util/project_api_util";
// import { createStep } from "../../util/step_api_util";
import { connect } from "react-redux";

const mapStateToProps = state => ({
    currentUser: state.entities.users[state.session.id],
    project: {
        title: "",
        body: "",
        author_id: state.session.id 
    }
})

const mapDispatchToProps = dispatch => ({
    createProject: (project) => dispatch(createProject(project)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectForm)