import React, {Component} from 'react'
import './ProcessList.css'
import Process from '../../components/Process/Process'
import {connect} from 'react-redux'
import { fetchProcess } from '../../store/actions/actionProcess'
import { graphql } from 'react-apollo'
import { processList } from '../../queries/queries'
import moment from 'moment'



class ProcessList extends Component {
  
  createDate = (timeStamp) => {
    return moment(timeStamp, 'X').format("D MMMM YYYY")
  }

  createTime = (timeStamp) => {
    return moment(timeStamp, 'X').format("H[ч] m [мин]")
  }

  renderProcess() {
    return Object.keys(this.props.data.processList).map((process) => {
      const processName = this.props.data.processList[process]
        return (
          <Process
            key = {processName.id}
            name = {processName.name}
            numberOfExecutions = {processName.numberOfExecutions}
            averageLeadTime = {this.createTime(processName.averageLeadTime)}
            averageActiveTime = {this.createTime(processName.averageActiveTime) }
            employeesInvolvedProcess = {processName.employeesInvolvedProcess}
            numberOfScenarios = {processName.numberOfScenarios}
            start = {this.createDate(processName.start)}
            end = {this.createDate(processName.end)}
            loading = {this.createDate(processName.loading)}
            />
        )
    })
  }

  componentDidMount() {
    const {data} = this.props
    this.props.fetchProcess(data)
  }

  componentDidUpdate() {
    const {data} = this.props
    this.props.fetchProcess(data)
  }

  render() {
    moment.updateLocale('en', {
      months : [
          "Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля",
          "Августа", "Сентября", "Октября", "Ноября", "Декабря"
      ]
    })

    return(
      <div className="ProcessList__container">
        {this.props.data.loading && this.props.data.processList === undefined ?
          <h3 style = {{textAlign: "center"}}> Загрузка </h3>
          : this.renderProcess()
       }
      </div>
  
    )
  }
}

const ProcessListQuery = graphql(processList)(ProcessList)

function mapDispatchToProps(dispatch) {
  return {
    fetchProcess: (param) => dispatch(fetchProcess(param)) 
  }
}

export default connect(null, mapDispatchToProps)(ProcessListQuery)