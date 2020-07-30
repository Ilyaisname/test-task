import React, {Component} from 'react'
import './RegistrationForm.css'
import {NavLink} from 'react-router-dom'
import Input from '../../components/UI/Input/Input'
import { connect } from 'react-redux'
import { createNewUserData } from '../../store/actions/actionsUser'
import { graphql } from 'react-apollo'
import { CREATE_USER } from '../../queries/mutations'
import { createOptionName } from '../../components/formHelpers/formHelper'
import { Field, reduxForm } from 'redux-form'
import { validate } from '../../components/formHelpers/validateForm/formInputValidate'
import FormErrorMessage from '../../components/formHelpers/FormErrorMessage/FormErrorMessage'
import { clearErrorMessage } from '../../store/actions/actionsUser'

class RegistrForm extends Component {

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
        <Field
          key={option + index}
          name={option.name}
          type={option.type}
          component={Input}
          placeholder={option.placeholder}
        />
      )
    })
  }

  handleSubmit = (values) => {
    const {firstName, secondName, email, password} = values 
      const newUser = {
        firstName: firstName,
        secondName: secondName,
        email: email,
        password: password
      }
      
      this.props.createNewUserData(newUser, this.props.mutate)
    }
  
  componentWillUnmount() {
    this.props.clearErrorMessage()
  }

  render() {
    const {handleSubmit} = this.props;
    return(
      
      <div className="rg-Form__container">
        <form className="rg-form" onSubmit={handleSubmit(this.handleSubmit)}>
          <h2 className="Form__header">Регистрация</h2>
          
          {this.renderInputs()}

          <button 
            type="submit"
            className="btn btn_color-yellow sz" 
            disabled={!this.props.valid}
            >Применить и войти</button>

        </form>

        <div className="rg-Form__href">
          <span className="rg-href__text">Уже зарегистрированны? &ensp;<NavLink to="/" exact> Вход</NavLink></span>
        </div>

        {this.props.errorMessage ? <FormErrorMessage errorMessage = {this.props.errorMessage} /> : null}

      </div>
     
    )
  }
}

RegistrForm = reduxForm({ form: 'registration', validate} )(RegistrForm)
const reqestRegistrForm = graphql(CREATE_USER)(RegistrForm)

function mapStatetoProps(state) {
  return{
    errorMessage: state.userData.error
  }
}

function mapDispatchToProps(dispatch) {
  return {
    clearErrorMessage: () => dispatch(clearErrorMessage()),
    createNewUserData: (newUser, mutate) => dispatch(createNewUserData(newUser, mutate))
  }
}

export default connect(mapStatetoProps, mapDispatchToProps)(reqestRegistrForm)

