import { connect } from "react-redux";
import { requestProjects, createProject, updateProject } from "../../actions/project_actions";
import { requestUsers } from "../../actions/user_actions";
import ProjectIndex from "./project_index";

const mapStateToProps = state => {
    return {
      projects: Object.values(state.entities.projects),
      users: state.entities.users
    };
}

const mapDispatchToProps = dispatch => ({
    requestProjects: () => dispatch(requestProjects()),
    requestUsers: () => dispatch(requestUsers()),
    createProject: project => dispatch(createProject(project)),
    updateProject: project => dispatch(updateProject(project))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectIndex);