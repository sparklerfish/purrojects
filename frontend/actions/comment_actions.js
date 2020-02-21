import * as CommentAPIUtil from "../util/comment_api_util";

export const RECEIVE_ALL_COMMENTS = "RECEIVE_ALL_COMMENTS";
export const RECEIVE_COMMENT = "RECEIVE_COMMENT";
export const REMOVE_COMMENT = "REMOVE_COMMENT";
export const CLEAR_COMMENTS = "CLEAR_COMMENTS";
export const RECEIVE_COMMENT_ERRORS = 'RECEIVE_COMMENT_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS'

// sync actions
export const receiveComments = ({ comments }) => ({
        type: RECEIVE_ALL_COMMENTS,
        comments
});

export const receiveComment = comment => ({
    type: RECEIVE_COMMENT,
    comment
});

export const removeComment = commentId => ({
    type: REMOVE_COMMENT,
    commentId
});

export const clearComments = () => ({
    type: CLEAR_COMMENTS
});

export const receiveErrors = errors => ({
    type: RECEIVE_COMMENT_ERRORS,
    errors
});

export const clearErrors = () => ({
    type: CLEAR_ERRORS
})

// async actions
export const requestComments = projectId => dispatch => {
    CommentAPIUtil.fetchComments(projectId)
    .then(comments => {
        dispatch(receiveComments(comments))});
}

export const createComment = comment => dispatch => {
    CommentAPIUtil.createComment(comment)
        .then(comment => dispatch(receiveComment(comment)))
        .fail(errors => dispatch(receiveErrors(errors)))
}

export const updateComment = comment => dispatch => {
    CommentAPIUtil.updateComment(comment)
        .then(comment => dispatch(receiveComment(comment)))
        .fail(errors => dispatch(receiveErrors(errors)))
}

export const destroyComment = commentId => dispatch => {
    CommentAPIUtil.destroyComment(commentId)
        .then(() => dispatch(removeComment(commentId)));
}