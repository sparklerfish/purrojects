import {
  RECEIVE_SESSION_ERRORS,
  RECEIVE_CURRENT_USER,
  CLEAR_ERRORS
} from '../actions/session_actions';

const _nullErrors = [];

export default (state = _nullErrors, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SESSION_ERRORS:
      return action.errors.responseJSON;
    case RECEIVE_CURRENT_USER:
<<<<<<< HEAD
      return _nullErrors;
=======
      return [];
    case CLEAR_ERRORS:
      return [];
>>>>>>> userAuth
    default:
      return state;
  }
};