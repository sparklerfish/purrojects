import { RECEIVE_COMMENT_ERRORS, CLEAR_ERRORS } from '../actions/project_actions';

export default (state = [], action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_COMMENT_ERRORS:
            return action.errors.responseJSON;
        case CLEAR_ERRORS:
            return [];
        default:
            return state;
    }
};