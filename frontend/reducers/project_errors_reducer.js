import { RECEIVE_PROJECT_ERRORS, CLEAR_ERRORS } from '../actions/project_actions';


export default (state = [], action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_PROJECT_ERRORS:
            debugger; 
            return action.errors.responseJSON;
        case CLEAR_ERRORS:
            return [];
        default:
            return state;
    }
};