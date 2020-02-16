import {
    RECEIVE_ALL_COMMENTS,
    RECEIVE_COMMENT,
    REMOVE_COMMENT,
    CLEAR_COMMENTS
} from "../actions/comment_actions";

const CommentsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let nextState = Object.assign({}, oldState);

    switch (action.type) {
        case RECEIVE_ALL_COMMENTS:
            if (action.comments) {
                return action.comments;
            } else {
                return {};
            }
        case RECEIVE_COMMENT:
            nextState[action.comment.id] = action.comment;
            return nextState;
        case REMOVE_COMMENT:
            delete nextState[action.commentId];
            return nextState;
        case CLEAR_COMMENTS:
            return {};
        default:
            return oldState;
    }
};

export default CommentsReducer;
