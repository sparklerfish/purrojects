import { requestProject, deleteProject } from '../../actions/project_actions'
import { requestSteps } from '../../actions/step_actions'
import { requestComments, destroyComment } from '../../actions/comment_actions'
import { connect } from 'react-redux';
import CommentList from './comment_list';


const mapStateToProps = (state) => {
    return {
        steps: state.entities.steps,
        comments: state.entities.comments,
        userId: state.session.id,
        currentUser: state.entities.users[state.session.id].username
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        requestProject: (projectId) => dispatch(requestProject(projectId)),
        requestSteps: (projectId) => dispatch(requestSteps(projectId)),
        requestComments: (projectId) => dispatch(requestComments(projectId)),
        deleteProject: (projectId) => dispatch(deleteProject(projectId)),
        destroyComment: (commentId) => dispatch(destroyComment(commentId))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(CommentList);