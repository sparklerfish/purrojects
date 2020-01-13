import { RECEIVE_ALL_PROJECTS, RECEIVE_PROJECT, REMOVE_PROJECT } from "../actions/project_actions";

const ProjectsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let nextState = Object.assign({}, oldState);

    switch(action.type) {
        case RECEIVE_ALL_PROJECTS:
            return action.projects;
        case RECEIVE_PROJECT:
            debugger
            const newProject = { [action.project.id]: action.project };
            return Object.assign({}, oldState, newProject);
        case REMOVE_PROJECT:
            delete nextState[action.projectId]
            return nextState;
        default:
            return oldState;
    }
};

export default ProjectsReducer;