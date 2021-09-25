import * as actionTypes from '../actionTypes'

export const Evals = (state = {
  isLoading: true,
  errMess: null,
  evals: []
}, action) => {
  switch (action.type) {
    case actionTypes.EVALS_LOADING:
      return {
        ...state,
        isLoading: true,
        errMess: null,
        evals: []
      }
    case actionTypes.ADD_EVALS:
      return {
        ...state,
        isLoading: false,
        errMess: null,
        evals: action.payload
      }
    case actionTypes.EVALS_FAILED:
      return {
        ...state,
        isLoading: false,
        errMess: action.payload,
        evals: []
      }
    case actionTypes.ADD_EVAL_ITEM:
      return {
        ...state,
        isLoading: false,
        errMess: null,
        evals: state.evals.concat(action.payload)
      }
    default:
      return state
  }
}
