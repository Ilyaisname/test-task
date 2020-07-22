import React from 'react'
import './PageMenu.css'
import MenuActive from './MenuActive/MenuActive'
import IconMenuBlue from './menuIcons/IconMenuBlue'


const PageMenu = props => {
  return (
      <div className="Menu__container">
        {props.isOpen ?
          <MenuActive 
            isOpen = {props.isOpen}
            onToogle = {props.menuToogle}
          />
        :
          <div className="Menu__wrap">
            <span onClick = {() => props.menuToogle(!props.isOpen)} className="Menu__icon"><IconMenuBlue /> </span>
            <span onClick = {() => props.menuToogle(!props.isOpen)} className="Menu__text">Меню</span>
          </div>
        }
      </div>
    )
  }

export default PageMenu