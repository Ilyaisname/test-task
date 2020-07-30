import { AUTH_SUCCESS, AUTH_ERROR, EDIT_USER_DATA_SUCCESS, CLEAR_ERROR, SUCCESS } from "../actions/actionsType"

const initialState = {
  token: null,
  error: null,
  success: false,
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
        success: true,
        user: action.payload
      }
    case SUCCESS: 
      return {
        ...state,
        success: false
      }
    default: 
      return state
  }
  
}