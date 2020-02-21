import { createComment, updateComment, requestComments } from "../../actions/comment_actions";
import { connect } from "react-redux";
import CommentForm from './comment_form'

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.entities.users[state.session.id],
  comment: {
      body: "",
      project_id: ownProps.projectId,
      author: state.entities.users[state.session.id],
      author_id: state.session.id
    },
  toggleForm: ownProps.toggleForm,
  errors: state.errors.comment
});

const mapDispatchToProps = dispatch => ({
  createComment: comment => dispatch(createComment(comment)),
  updateComment: comment => dispatch(updateComment(comment)),
  requestComments: projectId => dispatch(requestComments(projectId)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentForm)