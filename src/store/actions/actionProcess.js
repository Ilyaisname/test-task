import { FETCH_PROCESS_LOADING, FETCH_PROCESS_SUCCESS, FETCH_PROCESS_ERROR  } from './actionsType'

export function fetchProcess(params) {
  return async dispatch => {
      if (params.loading && params.processList === undefined)  {
        dispatch(fetchProcessLoading())
      } else if (params.error) {
        dispatch(fetchProcessError(params.error))
      } else {
        dispatch(fetchProcessSucsses(params.processList))
      }
  }
}

export function fetchProcessLoading() {
  return {
    type: FETCH_PROCESS_LOADING
  }
}

export function fetchProcessSucsses(process) {
  return {
    type: FETCH_PROCESS_SUCCESS,
    payload: process
  }
}

export function fetchProcessError(error) {
  return {
    type: FETCH_PROCESS_ERROR,
    payload: error
  }
}