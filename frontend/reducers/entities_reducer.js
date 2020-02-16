import { combineReducers } from 'redux';
import users from './users_reducer';
import projects from './projects_reducer';
import steps from './steps_reducer';
import comments from './comments_reducer';

export default combineReducers({
  users,
  projects,
  steps,
  comments
});
