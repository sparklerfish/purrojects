import { requestProject } from '../../actions/project_actions'
import { connect } from 'react-redux';
import ProjectEditBox from './project_edit_box';

const mapStateToProps = (state, ownProps) => {
    // debugger
    return {
        project: state.entities.projects[ownProps.projectId],
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        requestProject: (projectId) => dispatch(requestProject(projectId))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ProjectEditBox);