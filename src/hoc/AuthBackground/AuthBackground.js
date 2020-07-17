import React from 'react'
import './AuthBackground.css'
import logo from './logo.png'

const Authbackground = props => {
    return (
      <div className="Page">
        <h1 className="Page__header"><img src={logo} alt="header__proceset" /></h1>
        
        {props.children}
        
      </div>
    );
}


export default Authbackground 
