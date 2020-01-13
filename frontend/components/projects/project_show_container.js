import {requestProject} from '../../actions/project_actions'
import {requestSteps} from '../../actions/step_actions'
import { connect } from 'react-redux';
import ProjectShow from './project_show';

const mapStateToProps = (state, ownProps) => {
    // debugger
    return {
        project: state.entities.projects[ownProps.match.params.projectId]
    };
}

const mapDispatchToProps = (dispatch) => {
        return {
        requestProject: (projectId) => dispatch(requestProject(projectId))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ProjectShow);