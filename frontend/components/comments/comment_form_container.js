import { createComment, updateComment } from "../../actions/comment_actions";
import { connect } from "react-redux";
import CommentForm from './comment_form'

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.entities.users[state.session.id],
  comment: {
        body: "",
        project_id: ownProps.projectId,
        author_id: state.session.id
      },
  toggleForm: ownProps.toggleForm
});

const mapDispatchToProps = dispatch => ({
    createComment: (comment) => dispatch(createComment(comment)),
    updateComment: (comment) => dispatch(updateComment(comment))
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentForm)