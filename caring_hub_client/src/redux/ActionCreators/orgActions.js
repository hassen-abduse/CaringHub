import * as actionTypes from '../actionTypes'
import { baseUrl } from '../shared/baseUrl'

export const orgsLoading = () => ({
    type: actionTypes.ORGS_LOADING
});

export const orgsFailed = (errmess) => ({
    type: actionTypes.ORGS_FAILED,
    payload: errmess
});

export const addOrgs = (orgs) => ({
    type: actionTypes.ADD_ORGS,
    payload: orgs
});

export const fetchOrgs = () => (dispatch) => {
    dispatch(orgsLoading(true))
    return fetch(baseUrl + 'orgs')
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
        .then(orgs => dispatch(addOrgs(orgs)))
        .catch(error => dispatch(orgsFailed(error.message)))
}
