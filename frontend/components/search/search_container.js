import { connect } from "react-redux";
import { searchProjects } from "../../actions/project_actions";
import { withRouter } from "react-router-dom";
import Search from "./search";


const mapDispatchToProps = dispatch => ({
    searchProjects: search => dispatch(searchProjects(search))
});

export default withRouter(connect(null, mapDispatchToProps)(Search));