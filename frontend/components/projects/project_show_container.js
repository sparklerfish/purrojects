import {requestProject} from '../../actions/project_actions'
import {requestSteps} from '../../actions/step_actions'
import { connect } from 'react-redux';
import ProjectShow from './project_show';

const mapStateToProps = (state, ownProps) => {
    // console.log(ownProps.match.params.projectId);
    // console.log(state.entities.projects[1])
    // console.log(state)
    return {
        project: state.entities.projects[ownProps.match.params.projectId],
        steps: state.entities.steps
    };
}

const mapDispatchToProps = (dispatch) => {
        return {
        requestProject: (projectId) => dispatch(requestProject(projectId)),
        requestSteps: (projectId) => dispatch(requestSteps(projectId))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ProjectShow);