import { requestProject, deleteProject } from '../../actions/project_actions'
import {requestSteps} from '../../actions/step_actions'
import { connect } from 'react-redux';
import ProjectShow from './project_show';

const mapStateToProps = (state, ownProps) => {
    return {
        project: state.entities.projects[ownProps.match.params.projectId],
        steps: state.entities.steps,
        userId: state.session.id
    };
}

const mapDispatchToProps = (dispatch) => {
        return {
        requestProject: (projectId) => dispatch(requestProject(projectId)),
        requestSteps: (projectId) => dispatch(requestSteps(projectId)),
        deleteProject: (projectId) => dispatch(deleteProject(projectId))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ProjectShow);