import * as actionTypes from '../actionTypes'
import { baseUrl } from '../shared/baseUrl'

export const evalsLoading = () => ({
    type: actionTypes.EVALS_LOADING
});

export const evalsFailed = (errmess) => ({
    type: actionTypes.EVALS_FAILED,
    payload: errmess
});

export const addEvals = (evals) => ({
    type: actionTypes.ADD_EVALS,
    payload: evals
});

export const addEvalItem = (evalItem) => ({
    type: actionTypes.ADD_EVAL_ITEM,
    payload: evalItem
});

export const fetchEvals = () => (dispatch) => {
    dispatch(evalsLoading(true))
    return fetch(baseUrl + 'evaluations')
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
        .then(evals => dispatch(addEvals(evals)))
        .catch(error => dispatch(evalsFailed(error.message)))
}

export const postEval = (formData) => (dispatch) => {
    const bearer = 'Bearer ' + localStorage.getItem('token')
    return fetch(baseUrl + 'evaluations', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
            'Authorization': bearer,
            'Content-Type': 'application/json'
        }

    })
        .then(response => {
            if (response.ok) {
                return response
            }
            else {
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
        .then(response => dispatch(addEvalItem(response)))
        .catch(error => alert('EVAL COULD NOT BE POSTED: ' + error))
}

export const deleteEval = (evalId) => (dispatch) => {
    const bearer = 'Bearer ' + localStorage.getItem('token')
    return fetch(baseUrl + 'evaluations/' + evalId, {
        method: 'DELETE',
        headers: {
            'Authorization': bearer
        }
    })
        .then(response => {
            if (response.ok) {
                return response
            } else {
                const error = new Error('Error ' + response.status + ': ' + response.statusText)
                error.response = response
                throw error
            }
        }, error => {
            throw error
        })
        .then(response => response.json())
        .then(response => dispatch(addEvals(response)))
        .catch(error => dispatch(evalsFailed(error.message)))
}