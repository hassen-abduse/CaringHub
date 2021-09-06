import * as actionTypes from '../actionTypes'
import { baseUrl } from '../shared/baseUrl'
export const requestLogin = (creds) => {
  return {
    type: actionTypes.LOGIN_REQUEST,
    creds
  }
}

export const receiveLogin = (response) => {
  return {
    type: actionTypes.LOGIN_SUCCESS,
    token: response.token,
  }
}

export const loginUser = (creds) => (dispatch) => {
  // We dispatch requestLogin to kickoff the call to the API
  dispatch(requestLogin(creds))
  return fetch(baseUrl + 'login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(creds)
  })
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
      throw error
    })
    .then(response => response.json())
    .then(response => {
      if (response.success) {
        // If login was successful, set the token in local storage
        localStorage.setItem('token', response.token)
        localStorage.setItem('creds', JSON.stringify(creds))
        // Dispatch the success action
        dispatch(receiveLogin(response))
      } else {
        const error = new Error('Error ' + response.status)
        error.response = response
        throw error
      }
    })
    .catch(error => dispatch(loginError(error.message)))
}

export const loginError = (message) => {
  return {
    type: actionTypes.LOGIN_FAILURE,
    message
  }
}

export const requestLogout = () => {
  return {
    type: actionTypes.LOGOUT_REQUEST
  }
}

export const receiveLogout = () => {
  return {
    type: actionTypes.LOGOUT_SUCCESS
  }
}

// Logs the user out
export const logoutUser = () => (dispatch) => {
  dispatch(requestLogout())
  localStorage.removeItem('token')
  localStorage.removeItem('creds')
  dispatch(receiveLogout())
}
