import React from 'react'
import './Process.css'
import NumberOfExecutionsIcon from './processIcon/NumberOfExecutionsIcon'
import AverageLeadTimeIcon from './processIcon/AverageLeadTimeIcon'
import AverageActionsTimeIcon from './processIcon/AverageActionsTimeIcon'
import EmployeesInvolvedProcessIcon from './processIcon/EmployeesInvolvedProcessIcon'
import NumberOfScenariosIcon from './processIcon/NumberOfScenariosIcon'

export default (props) => {
  return(
    <div className="Process__container">
      <div className="Process__header">
        <h2 className="header__text">
          {props.name} 
        </h2>  
        <span className="header__href">
          На карту процесса
        </span>
      </div>
      <div className="Process__wrap">
       <div className="Process__wrap container">
          <div className="Process__counter">
            <span className="_icon"><NumberOfExecutionsIcon /></span>
            <span className="counter__number">{props.numberOfExecutions}</span>
          </div>
          <div className="Process__time coll">
            <div className="time">
              <span className="_icon"><AverageLeadTimeIcon /></span>
              <span className="time__time">{props.averageLeadTime}</span>
            </div> 
            <div className="time">
              <span className="_icon"><AverageActionsTimeIcon /></span>
              <span className="time__percent">{props.averageActiveTime}</span>
            </div>
          </div>
       </div>
       <div className="Process__wrap container">
            <div className="Process__persons coll">
              <div className="persons">
                <span className="_icon"><EmployeesInvolvedProcessIcon /></span>
                <span className="persons__sum">{props.employeesInvolvedProcess} сотрудников</span>
              </div> 
              <div className="persons">
                <span className="_icon"><NumberOfScenariosIcon /></span>
                <span className="persons__scripts">{props.numberOfScenarios} сценариев</span>
              </div>
            </div>
            <div className="Process__date coll">
            <div className="date__wrap">
                <span className="date__start">Начало</span>
                <span className="date__date-number">{props.start}</span>
            </div>
            <div className="date__wrap">
                <span className="date__end">Окончание</span>
                <span className="date__date-number">{props.end}</span>
            </div>
            <div className="date__wrap">
                <span className="date__loading">Загрузка</span>
                <span className="date__date-number">{props.loading}</span>
              </div>
        </div>
        </div>
      </div>
      
    </div>
  )
}