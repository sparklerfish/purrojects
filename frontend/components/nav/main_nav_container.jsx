import { connect } from "react-redux";
import { requestProjects } from "../../actions/project_actions";
import MainNav from "./main_nav";

const mapDispatchToProps = dispatch => ({
    requestProjects: dispatch(requestProjects())
})

export default connect(null, mapDispatchToProps)(MainNav);