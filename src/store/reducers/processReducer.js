import { FETCH_PROCESS_LOADING, FETCH_PROCESS_SUCCESS, FETCH_PROCESS_ERROR } from "../actions/actionsType"

const initialState = {
  process: [],
  loading: false,
  error: null
}

export default function processReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_PROCESS_LOADING:
      return {
        ...state, loading: true
      }
      case FETCH_PROCESS_SUCCESS:
      return {
        ...state, loading: false, process: action.payload
      }
      case FETCH_PROCESS_ERROR:
      return {
        ...state, loading: false, error: action.payload
      }
    default:
      return state
  }
}