import * as ProjectAPIUtil from '../util/project_api_util'

export const RECEIVE_ALL_PROJECTS = 'RECEIVE_ALL_PROJECTS';
export const RECEIVE_PROJECT = 'RECEIVE_PROJECT';
export const REMOVE_PROJECT = 'REMOVE_PROJECT';
export const RECEIVE_PROJECT_ERRORS = 'RECEIVE_PROJECT_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS'


const removeSteps = project => {
    delete project['steps']; 
    return project; 
}

const receiveProject = project => ({
    type: RECEIVE_PROJECT,
    project
});

const receiveProjects = (projects) => ({
    type: RECEIVE_ALL_PROJECTS,
    projects
});

const removeProject = projectId => ({
    type: REMOVE_PROJECT,
    projectId
});

const receiveErrors = errors => ({
    type: RECEIVE_PROJECT_ERRORS,
    errors
});

const clearErrors = () => ({
    type: CLEAR_ERRORS
});

export const requestProjects = () => dispatch => (
    ProjectAPIUtil.fetchProjects()
        .then((projects) => dispatch(receiveProjects(projects)))
);

export const requestProject = projectId => dispatch => (
    ProjectAPIUtil.fetchProject(projectId)
        .then(project => dispatch(receiveProject(removeSteps(project))
    ))
);

export const createProject = project => dispatch => {
    return ProjectAPIUtil.createProject(project)
        .then(project => dispatch(receiveProject(project)))
        .then(project => {
            localStorage.setItem('newProjectId', project.project.id); 
        })
        .fail(errors => { 
            return dispatch(receiveErrors(errors)); 
        })
};

export const updateProject = project => dispatch => (
    ProjectAPIUtil.updateProject(project)
        .then(project => dispatch(receiveProject(project)))
        .fail(errors => dispatch(receiveErrors(errors)))
);

export const deleteProject = projectId => dispatch => (
    ProjectAPIUtil.deleteProject(projectId)
        .then(() => dispatch(removeProject(projectId)))
);

export const searchProjects = search => dispatch => {
    console.log(ProjectAPIUtil.searchProjects(search))
     return ProjectAPIUtil.searchProjects(search)
        .then(projects => {
            console.log(projects)
            console.log(search)
            dispatch(receiveProjects(projects))
        })
}