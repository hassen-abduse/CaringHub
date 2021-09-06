import * as actionTypes from '../actionTypes'

export const NetRequest = (state = {
  isLoading: false,
  errMess: null,
  status: null,
  data: null
}, action) => {
  switch (action.type) {
    case actionTypes.NET_REQUEST_LOADING:
      return {
        ...state,
        isLoading: true,
        data: action.data,
        status: null
      }
    case actionTypes.NET_REQUEST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        status: action.status,
        errMess: null,
        data: null
      }
    case actionTypes.NET_REQUEST_FAILED:
      return {
        ...state,
        isLoading: false,
        errMess: action.errMess,
        status: null
      }
    default:
      return state
  }
}
