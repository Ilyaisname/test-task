import React, {useState} from 'react'
import './Input.css'
import PasswordEye from './PasswordIcon/PasswordEye/PasswordEye'

const Input = (props) => {
  const {input, type, placeholder, inputId} = props
  const cls = ['Input']
  const [visible, setVisible] = useState(false)

  function isInvalid({meta: {invalid, touched}}) {
    return invalid && touched
  }

  if (isInvalid(props)) {
    cls.push('invalid')
  }

  const passwordIcon = () => {
    if (type === 'password') return <PasswordEye visible = {visible} setVisible = {setVisible} />
    if (type === 'repeatPassword') return <PasswordEye visible = {visible} setVisible = {setVisible} />
  }

  function onChangeVisibility(visible, type) {
    if (visible && type === 'password') return 'text'
    if (visible && type === 'repeatPassword') return 'text'
    return type
  }

  return (
      <div className={cls.join(' ')}>
          <input 
            {...input}
            type = {onChangeVisibility(visible, type)}
            placeholder = {placeholder} 
            id = {inputId || null}
            autoComplete = "off"
          />
  
          {passwordIcon()}
          
          {isInvalid(props) ? <span className="input-error-message">{props.meta.error}</span> : null }
      </div>
  )
}

export default Input