import React, {Component} from 'react'
import './AuthForm.css'
import {NavLink} from 'react-router-dom'
import Input from '../../components/UI/Input/Input'
import { connect } from 'react-redux'
import { graphql } from 'react-apollo'
import { LOGIN } from '../../queries/mutations'
import { Field, reduxForm } from 'redux-form'
import { createOptionName } from '../../components/formHelpers/formHelper'
import { authentication } from '../../store/actions/actionsUser'
import { validate } from '../../components/formHelpers/validateForm/formInputValidate'
import FormErrorMessage from '../../components/formHelpers/FormErrorMessage/FormErrorMessage' 
import { clearErrorMessage } from '../../store/actions/actionsUser'

class AuthForm extends Component {
  state = {
    optionFields: {
      email: createOptionName("email", "email", "Электронная почта"),
      password: createOptionName("password", "password", "Пароль") 
    }
  }

  renderInputs() {
    return Object.keys(this.state.optionFields).map((optionName, index) => {
      const option = this.state.optionFields[optionName]
      return (

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

  loginHandler = (values) => {
    const {email, password} = values
    this.props.authentication(email, password, this.props.mutate)
  }

  componentWillUnmount() {
    this.props.clearErrorMessage()
  }

  render () {
    const {handleSubmit} = this.props;
    return(
      <div className="Form__container">
        <form className="form" onSubmit={handleSubmit(this.loginHandler)}>
          
          {this.renderInputs()}
        
          <button type="submit" className="btn btn_color-yellow" disabled={ !this.props.valid }>Войти в систему</button>

          <NavLink to="/Registration" className="Login__reg-href">Зарегистрироваться</NavLink>
        
        </form>

        {this.props.errorMessage ? <FormErrorMessage errorMessage = {this.props.errorMessage} /> : null}

      </div>

    )
  }
}

AuthForm = reduxForm({ form: 'login', validate} )(AuthForm)

function mapStatetoProps(state) {
  return{
    errorMessage: state.userData.error
  }
}

function mapDispatchToProps(dispatch) {
  return {
    clearErrorMessage: () => dispatch(clearErrorMessage()),
    authentication: (email, password, mutate) => dispatch(authentication(email, password, mutate))
  }
}

const LoginFormRequest = graphql(LOGIN)(AuthForm)

export default connect(mapStatetoProps, mapDispatchToProps)(LoginFormRequest)