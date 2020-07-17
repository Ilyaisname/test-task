import React from 'react'
import './FormErrorMessage.css'
import ErrorIcon from './ErrorIcon'

const FormErrorMessage = props => {
  return(
    <div className="Form-error">
      <span><ErrorIcon /></span>
      <span>{props.errorMessage}</span>
    </div>
  )
}
export default FormErrorMessage 