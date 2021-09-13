import * as actionTypes from '../actionTypes'

export const NetRequest = (state = {
  isLoading: false,
  errMess: null,
  success: false,
  data: null
}, action) => {
  switch (action.type) {
    case actionTypes.NET_REQUEST_LOADING:
      return {
        ...state,
        isLoading: true,
        data: action.data,
        success: false
      }
    case actionTypes.NET_REQUEST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        success: action.success,
        errMess: null,
        data: null
      }
    case actionTypes.NET_REQUEST_FAILED:
      return {
        ...state,
        isLoading: false,
        errMess: action.errMess,
        success: false,
        status: null
      }
    default:
      return state
  }
}
