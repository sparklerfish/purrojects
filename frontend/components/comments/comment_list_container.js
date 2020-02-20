import { requestProject, deleteProject } from '../../actions/project_actions'
import { requestSteps } from '../../actions/step_actions'
import { requestComments } from '../../actions/comment_actions'
import { connect } from 'react-redux';
import CommentList from './comment_list';

const mapStateToProps = (state) => {
    return {
        // project: state.entities.projects[ownProps.match.params.projectId],
        steps: state.entities.steps,
        comments: state.entities.comments,
        userId: state.session.id
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        requestProject: (projectId) => dispatch(requestProject(projectId)),
        requestSteps: (projectId) => dispatch(requestSteps(projectId)),
        requestComments: (projectId) => dispatch(requestComments(projectId)),
        deleteProject: (projectId) => dispatch(deleteProject(projectId))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(CommentList);