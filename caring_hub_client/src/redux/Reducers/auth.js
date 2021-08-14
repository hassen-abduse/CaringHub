import * as ActionTypes from './ActionTypes'

// The auth reducer. The starting state sets authentication
// based on a token being in local storage.
export const Auth = (state = {
  isLoading: false,
  isAuthenticated: !!localStorage.getItem('token'),
  token: localStorage.getItem('token'),
  userId: localStorage.getItem('userId'),
  Role: localStorage.getItem('Role'),
  user: localStorage.getItem('creds') ? JSON.parse(localStorage.getItem('creds')) : null,
  errMess: null
}, action) => {
  switch (action.type) {
    case ActionTypes.LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,
        isAuthenticated: false,
        user: action.creds

      }
    case ActionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isAuthenticated: true,
        errMess: '',
        token: action.token,
        Role: action.Role,
        userId: action.userId
      }
    case ActionTypes.LOGIN_FAILURE:
      return {
        ...state,
        isLoading: false,
        isAuthenticated: false,
        errMess: action.message
      }
    case ActionTypes.LOGOUT_REQUEST:
      return {
        ...state,
        isLoading: true,
        isAuthenticated: true
      }
    case ActionTypes.LOGOUT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isAuthenticated: false,
        Role: '',
        token: '',
        userId: '',
        user: null

      }
    default:
      return state
  }
}
