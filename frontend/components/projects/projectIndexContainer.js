import { connect } from "react-redux";
import { requestProjects, requestProject } from "../../actions/project_actions";
import ProjectIndex from "./projectIndex";

const mapStateToProps = state => ({
    projects: Object.values(state.projects)
});

const mapDispatchToProps = dispatch => ({
    requestProjects: () => dispatch(requestProjects())
});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectIndex);