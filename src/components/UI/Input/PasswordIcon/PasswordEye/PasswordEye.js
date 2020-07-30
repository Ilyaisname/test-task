import React from 'react'
import classes from './PasswordEye.module.css'
import PasswordIconOpen from '../Open/PasswordIconOpen'
import PasswordIconClose from '../Close/PasswordIconClose'

function PasswordEye(props) {
  const {visible, setVisible} = props

  return (
    <span 
      className = {classes['password-visible']}
      onClick = {() => setVisible(!visible)}
    >
      { visible ? <PasswordIconOpen /> : <PasswordIconClose />}
    </span>  
  )
}

export default PasswordEye