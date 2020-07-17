import { AUTH_SUCCESS, AUTH_ERROR, EDIT_USER_DATA_SUCCESS, CLEAR_ERROR } from "../actions/actionsType"

const initialState = {
  token: null,
  error: null,
  user: {}
}

export default function userData(state = initialState, action) {
  switch (action.type) {
    case AUTH_SUCCESS:
      return {
        ...state,
        error: null,
        token: action.payload.token,
        user: action.payload.user
      }
    case AUTH_ERROR:
      return {
        ...state,
        error: action.payload
      }
    case CLEAR_ERROR:
      return {
        ...state,
        error: null
      }
    case EDIT_USER_DATA_SUCCESS:
      return {
        ...state,
        user: action.payload
      }
    default: 
      return state
  }
  
}