import { RECEIVE_ERRORS, CLEAR_ERRORS } from '../actions/error_actions';


export default (state = [], action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_ERRORS:
            return action.errors.responseJSON;
        case CLEAR_ERRORS:
            return [];
        default:
            return state;
    }
};