import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './components/App'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import reducer from './reducers'
import middleware from './middleware'

//Initialize store with reducer and middleware
const store = createStore(reducer,middleware)

//Initialize app with Provider and connect for accessing store across the application
//This avoids passing the store to the child components
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'))
