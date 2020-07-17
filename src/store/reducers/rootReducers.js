import {combineReducers} from 'redux'
import processReducer from './processReducer'
import userData from './userReducer'
import { reducer as formReducer } from 'redux-form'


export default combineReducers({
  processes: processReducer,
  userData: userData,
  form: formReducer
})