import React, { Component } from 'react'
import {connect} from 'react-redux'
import handleInitialData from '../actions/shared'


class App extends Component {
  componentDidMount(){
    this.props.dispatch(handleInitialData())
  }
  render() {
    return (
      <div>
        Starter Code
      </div>
    )
  }
}

//Connecting for dispatch with connect function as props
export default connect()(App)
