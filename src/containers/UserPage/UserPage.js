import React, {Component} from 'react'
import './UserPage.css'
import Input from '../../components/UI/Input/Input'
import { connect } from 'react-redux'
import { editUserData } from '../../store/actions/actionsUser'
import { graphql } from 'react-apollo'
import { editUser } from '../../queries/mutations'
import { createOptionName, isEqual } from '../../components/formHelpers/formHelper'
import { Field, reduxForm, formValueSelector } from 'redux-form'
import {initialize} from 'redux-form'
import { validate } from '../../components/formHelpers/validateForm/editUserValidate'
import FormErrorMessage from '../../components/formHelpers/FormErrorMessage/FormErrorMessage'
import { clearErrorMessage } from '../../store/actions/actionsUser'


class UserPage extends Component {
  constructor(props) {
    super(props)
    let { userDataValue,initializeUser } = this.props
    initializeUser( userDataValue )
  }

  state = {
    optionFields: {
      firstName: createOptionName("text", "firstName", "Имя"),
      secondName: createOptionName("text","secondName","Фамилия"),
      email: createOptionName("email", "email", "Электронная почта"),
      password: createOptionName("password", "password", "Пароль"),
      repeatPassword: createOptionName("password", "repeatPassword", "Повторите пароль")
    }
  }

  renderInputs() {
    return Object.keys(this.state.optionFields).map((controlName, index) => {
      const option = this.state.optionFields[controlName]
      return(
        <div className="form__row-wrap" key={controlName + index}>
          <label htmlFor = {option.type + index}>{option.placeholder}</label>
          <Field
            inputId = {option.type + index}
            type = {option.type}
            component = {Input}
            name = {option.name}
          />
        </div>
      )
    })
  }

  saveUserData = () => {
    const { firstName, secondName, email, password } = this.props.userEditValue
      const newUserData = {
        id: +localStorage.getItem('userId'),
        firstName: firstName,
        secondName: secondName,
        email: email,
        password: password
      }

      this.props.editUserData(newUserData, this.props.mutate, this.props.token)
  }

  buttonVisible = () => {
    const { valid, userEditValue, userDataValue } = this.props
    if ( valid && !isEqual(userEditValue, userDataValue) ) {
      return false
    } else return true
  }

  componentDidUpdate() {
    if (this.props.errorMessage) this.props.clearErrorMessage()
  }

  transformToUppercase = str => {
    if (!str) return str;
  
    return str[0].toUpperCase() + str.slice(1);
  }

  render() {
    const {handleSubmit} = this.props
    return(
      <div className = "User-page__container">
        <div className = "User-page__header">
          <div className = "header__user-name">
            <span>{this.transformToUppercase(this.props.userDataValue.firstName)} {this.transformToUppercase(this.props.userDataValue.secondName)}. Редактирование</span>
          </div>
          <div className = "header__button">
            <button 
              className = "User-page btn btn_color-yellow"
              onClick = {this.saveUserData}
              disabled = {this.buttonVisible()}
            > 
              Сохранить
            </button>
          </div>
        </div>
        <form className="User-page__form" onSubmit={handleSubmit}>

          {this.renderInputs()}
            
        </form>

        {this.props.errorMessage ? <FormErrorMessage errorMessage = {this.props.errorMessage} /> : null}
       
      </div>
    )
  }
}

UserPage = reduxForm({ 
  form: 'editUser',
  validate
} )(UserPage)

const selector = formValueSelector('editUser')
UserPage = connect(state => {
      const userEditValue = selector(state, 'firstName', 'secondName', 'email', 'password')
      return {
        userEditValue
      }
    })(UserPage)

const UserPageQuery = graphql(editUser)(UserPage) 

function mapStateToProps(state) {
  return{
    token: state.userData.token,
    userDataValue: state.userData.user,
    errorMessage: state.userData.error
  }
}

function mapDispatchToProps(dispatch) {
  return{
    editUserData: (newUserData, mutate) => dispatch(editUserData(newUserData, mutate)),
    initializeUser: (userData) => dispatch(initialize('editUser', userData)),
    clearErrorMessage: () => dispatch(clearErrorMessage())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserPageQuery)