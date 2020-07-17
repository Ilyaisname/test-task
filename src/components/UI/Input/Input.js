import React from 'react'
import './Input.css'

const Input = (props) => {
  const {input, type, placeholder, inputId} = props
  const cls = ['Input']

  function isInvalid({meta: {invalid, touched}}) {
    return invalid && touched
  }

  if (isInvalid(props)) {
    cls.push('invalid')
  }

  return (
      <div className={cls.join(' ')}>
        <input 
          {...input}
          type = {type}
          placeholder = {placeholder} 
          id = {inputId || null}
          autoComplete = "off"
        />
        
        {isInvalid(props) ? <span className="input-error-message">{props.meta.error}</span> : null }
      </div>
  )
}

export default Input