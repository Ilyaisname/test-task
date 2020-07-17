import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import IconMenu from '../menuIcons/IconMenu'
import UserPic from '../menuIcons/UserPic'
import ProcessIcon from '../menuIcons/ProcessIcon'
import './MenuActive.css'
import Nameproduct from '../menuIcons/Nameproduct.png'


class MenuActive extends Component {
  

  render() {
    const cls = ['menu']
    if (this.props.isOpen) cls.push('open')

    return (
      <div className="menu-drop-container">
        <nav className="drop-down-menu open">
          <ul className={cls.join(' ')}>
            <li className="menu__link"><NavLink to="/" exact>
              <span><IconMenu /></span>
              <span><img src={Nameproduct} alt="proceset"/> </span> 
            </NavLink></li>
            <li className="menu__link"><NavLink to="/user-page">
              <span><UserPic /></span>
              <span>Username</span> 
            </NavLink></li>
            <li className="menu__link"><NavLink to="/process">
              <span><ProcessIcon /> </span>
              <span>Список процессов</span> 
            </NavLink></li>
          </ul>
        </nav>
      </div>
    )
  }

  
}

export default MenuActive