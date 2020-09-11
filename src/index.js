import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';
import {BrowserRouter} from 'react-router-dom'
import * as serviceWorker from './serviceWorker'
import {createStore, compose, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import rootRedusers from './store/reducers/rootReducers'
import thunk from 'redux-thunk'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks'




const client = new ApolloClient({
  uri: "http://localhost:4000/api",
  request: (operation) => {
    const token = sessionStorage.getItem('token')
    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : ''
      }
    })
  }
})


const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
  }) : compose;

const store = createStore(
  rootRedusers, 
  composeEnhancers(
    applyMiddleware(thunk)
    )
  )

const app = (
  <ApolloProvider client={client}>
    <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
    </Provider>
  </ApolloProvider>
)



ReactDOM.render(
 
  <React.Fragment>
    {app}
  </React.Fragment>,

  document.getElementById('root')
)

serviceWorker.unregister()
