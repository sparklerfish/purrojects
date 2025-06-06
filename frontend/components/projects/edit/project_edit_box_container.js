import { requestProject } from '../../../actions/project_actions'
import { connect } from 'react-redux';
import ProjectEditBox from './project_edit_box';
import { withRouter } from 'react-router-dom';


const mapStateToProps = (state, ownProps) => {
    return {
        project: state.entities.projects[ownProps.projectId],
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        requestProject: (projectId) => dispatch(requestProject(projectId))
    }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProjectEditBox));