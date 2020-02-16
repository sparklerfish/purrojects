import { createComment, updateComment } from "../../util/comment_api_util";
import { connect } from "react-redux";

const mapStateToProps = (state, ownProps) => ({
    currentUser: state.entities.users[state.session.id],
    comment: {
        body: "",
        projectId: ownProps.match.params.projectId
    }
})

const mapDispatchToProps = dispatch => ({
    createComment: (comment) => dispatch(createComment(comment)),
    updateComment: (comment) => dispatch(updateComment(comment))
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentForm)