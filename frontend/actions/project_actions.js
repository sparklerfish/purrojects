import * as ProjectAPIUtil from '../util/project_api_util'

export const RECEIVE_ALL_PROJECTS = 'RECEIVE_ALL_PROJECTS';
export const RECEIVE_PROJECT = 'RECEIVE_PROJECT';
export const REMOVE_PROJECT = 'REMOVE_PROJECT';

const receiveProject = project => ({
    type: RECEIVE_PROJECT,
    project
});

const receiveProjects = ({projects, steps}) => ({
    type: RECEIVE_ALL_PROJECTS,
    projects,
    steps
});

const removeProject = projectId => ({
    type: REMOVE_PROJECT,
    projectId
});

export const requestProjects = () => dispatch => (
    ProjectAPIUtil.fetchProjects()
        .then((projects) => dispatch(receiveProjects(projects)))
);

export const requestProject = projectId => dispatch => (
    ProjectAPIUtil.fetchProject(projectId)
        .then(project => dispatch(receiveProject(project)))
);

export const createProject = project => dispatch => (
    ProjectAPIUtil.createProject(project)
        .then(project => dispatch(receiveProject(project)))
);

export const updateProject = project => dispatch => (
    ProjectAPIUtil.updateProject(project)
        .then(project => dispatch(receiveProject(project)))
);

export const deleteProject = projectId => dispatch => (
    ProjectAPIUtil.deleteProject(projectId)
        .then(() => dispatch(removeProject(projectId)))
);

