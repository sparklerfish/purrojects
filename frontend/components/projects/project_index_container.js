import { connect } from "react-redux";
import { requestProjects, createProject, updateProject } from "../../actions/project_actions";
import ProjectIndex from "./project_index";

const mapStateToProps = state => ({
    projects: Object.values(state.projects)
});

const mapDispatchToProps = dispatch => ({
    requestProjects: () => dispatch(requestProjects()),
    createProject: project => dispatch(createProject(project)),
    updateProject: project => dispatch(updateProject(project))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectIndex);