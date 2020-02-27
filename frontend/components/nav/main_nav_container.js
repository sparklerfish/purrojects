import { connect } from "react-redux";
import { requestProjects } from "../../actions/project_actions";
import MainNav from "./main_nav";
import { withRouter } from "react-router-dom";

const mapDispatchToProps = dispatch => ({
    requestProjects: () => dispatch(requestProjects())
})

export default withRouter(connect(null, mapDispatchToProps)(MainNav));