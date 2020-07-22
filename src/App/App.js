import React, {Component} from 'react';
import Layout from '../hoc/Layout/Layout'
import {Route, Switch, Redirect} from 'react-router-dom'
import UserPage from '../containers/UserPage/UserPage'
import ProcessList from '../containers/ProcessList/ProcessList'
import AuthForm from '../containers/AuthForm/AuthForm';
import RegistrationForm from '../containers/RegistrationForm/RegistrationForm';
import { connect } from 'react-redux';
import Authbackground from '../hoc/AuthBackground/AuthBackground';
import Pages from '../hoc/Pages/Pages'

class App extends Component {

  render() {
    let routes = (
      <Authbackground>
        <Switch>
          <Route path="/" exact component={AuthForm} />
          <Route path="/Registration" component={RegistrationForm} />
        </Switch>
      </Authbackground>
    )

    if (this.props.isAuthenticated) {
      routes = (
        <Pages>
          <Switch>
            <Route path="/user-page" component={UserPage} />
            <Route path="/process" component={ProcessList} />
            <Redirect to="/user-page" />
          </Switch>
        </Pages>
      )
    }
    return (
      <Layout>

        {routes}

      </Layout>
    )
  }
}

function mapStateToProps(state) {
  return {
    isAuthenticated: !!state.userData.token
  }
} 

export default connect(mapStateToProps)(App)


