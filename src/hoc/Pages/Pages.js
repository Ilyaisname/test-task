import React, { useState } from 'react'
import PageMenu from '../../components/PageMenu/PageMenu'
import classes from './Pages.module.css'

function Pages (props) {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={classes['Pages__body']}>
      <PageMenu 
        menuToogle = {setIsOpen}
        isOpen = {isOpen}
      />

      {props.children}

    </div>
  )
}

export default Pages