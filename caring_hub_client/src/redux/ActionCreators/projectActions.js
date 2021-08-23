import * as actionTypes from '../actionTypes'
import { baseUrl } from '../shared/baseUrl'

export const projectsLoading = () => ({
    type: actionTypes.PROJECTS_LOADING
});

export const projectsFailed = (errmess) => ({
    type: actionTypes.PROJECTS_FAILED,
    payload: errmess
});

export const addProjects = (projects) => ({
    type: actionTypes.ADD_PROJECTS,
    payload: projects
});

export const addProjectItem = (project) => ({
    type: actionTypes.ADD_PROJECT_ITEM,
    payload: project
});

export const fetchProjects = () => (dispatch) => {
    dispatch(projectsLoading(true))
    return fetch(baseUrl + 'projects')
        .then(response => {
            if (response.ok) {
                return response
            } else {
                const error = new Error('Error ' + response.status + ': ' + response.statusText)
                error.response = response
                throw error
            }
        },
            error => {
                const errMess = new Error(error.message)
                throw errMess
            })
        .then(response => response.json())
        .then(projects => dispatch(addProjects(projects)))
        .catch(error => dispatch(projectsFailed(error.message)))
}