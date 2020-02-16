import { createComment, updateComment } from "../../util/comment_api_util";
import { connect } from "react-redux";
import CommentForm from './comment_form'

const mapStateToProps = (state, ownProps) => ({
    currentUser: state.entities.users[state.session.id],
    comment: {
        body: "",
        projectId: ownProps.projectId
    },
    toggleForm: ownProps.toggleForm
})

const mapDispatchToProps = dispatch => ({
    createComment: (comment) => dispatch(createComment(comment)),
    updateComment: (comment) => dispatch(updateComment(comment))
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentForm)