import { AUTH_SUCCESS, AUTH_ERROR, EDIT_USER_DATA_SUCCESS, CLEAR_ERROR, SUCCESS } from "./actionsType"

// вход в систему
export function authentication(email, password, mutate) {
  return async dispatch => {
    try {
    const request = await mutate({  variables: {
      email: email,
      password: password
      }
    })
   
      const data = request.data.login
      
      // localStorage.setItem('token', data.token)
      // localStorage.setItem('userId', data.user.id)
      sessionStorage.setItem('token', data.token)
      sessionStorage.setItem('userId', data.user.id)
      sessionStorage.setItem('user', JSON.stringify(data.user))

      dispatch(authSuccess(data))

    } catch (error) {

      const  { message } = error
      dispatch(authError(message.slice(8)))
    }  
  }
}


// регистрация нового пользователя
export function createNewUserData(newUser, mutate){
  return async dispatch => {
    try{
      const reqest = await mutate({  variables: {
        ...newUser
        }
      })
        
      const data = reqest.data.login

      // localStorage.setItem('userId', data.user.id)
      // localStorage.setItem('token', data.token)
      sessionStorage.setItem('token', data.token)
      sessionStorage.setItem('userId', data.user.id)
      sessionStorage.setItem('user', JSON.stringify(data.user))

      dispatch(authSuccess(data))
  
    } catch (error) {

      const  { message } = error
      dispatch(authError(message.slice(8)))
    }  
  }
}


// внесение изменений в данные пользователя
export function editUserData(newUserData, mutate) {
  return async dispatch => {
    try {
      const variablesToMutate = {...newUserData}

      if (variablesToMutate.password === '') delete variablesToMutate.password

      const reqest = await mutate( {  
        variables: { ...variablesToMutate }
      })

      const userData = reqest.data.editUser
      dispatch(editSuccess(userData))
      sessionStorage.setItem('user', JSON.stringify(userData))

      if (userData) {
        setTimeout( () => {
          dispatch(changeSuccess())
        }, 3000) 
      }

    } catch (error) {

      const  { message } = error
      dispatch(authError(message.slice(8)))
    }  
  }
}

// очистить ошибки при удалении компонента
export function clearErrorMessage() {
  return dispatch => {
    dispatch(clearError())
  }
}

// dispatch
export function editSuccess(user) {
  return {
    type: EDIT_USER_DATA_SUCCESS,
    payload: user
  }
}

export function authSuccess(data) {
  return {
    type: AUTH_SUCCESS,
    payload: data
  }
}

export function authError(error) {
  return {
    type: AUTH_ERROR,
    payload: error
  }
} 

export function clearError() {
  return {
    type: CLEAR_ERROR,
  }
}

export function changeSuccess() {
  return {
    type: SUCCESS
  }
}