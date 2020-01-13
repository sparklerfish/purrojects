import {requestProject} from '../../actions/project_actions'
import {requestSteps} from '../../actions/step_actions'
import { connect } from 'react-redux';
import ProjectShow from './project_show';

const mapStateToProps = (state, ownProps) => {
    return {
        project: state.entities.projects[ownProps.match.params.projectId]
    };
}

const mapDispatchToProps = (dispatch) => ({
    requestProject: (projectId) => dispatch(requestProject(projectId)),
    requestSteps: () => dispatch(requestSteps())
})


export default connect(mapStateToProps, mapDispatchToProps)(ProjectShow);