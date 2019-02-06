import React, { Component } from 'react'
import {connect} from 'react-redux'
import handleInitialData from '../actions/shared'
import Dashboard from './Dashboard'
import NewTweet from './NewTweet'
import TweetPage from './TweetPage'
import { SyncLoader } from 'react-spinners';


class App extends Component {
  componentDidMount(){
    this.props.dispatch(handleInitialData())
  }
  render() {
    return (
      <div>
        { this.props.loading === true
          ? <div style={{position:'fixed',top:'50%', left:'50%'}} >
            <SyncLoader color='#3B84E1'/>
          </div>
          : <TweetPage match={{params: {id:'2mb6re13q842wu8n106bhk'}}}/>
        }
      </div>
    )
  }
}

function mapStateToProps({authedUser}){
  return {
    loading: authedUser===null
  }
}

//Using the connect function upgrades a component to a container. Containers can read state from the store and dispatch actions.
//Signature of connect function - connect([mapStateToProps], [mapDispatchToProps], [mergeProps], [options])
/*
    mapStateToProps - If this argument is specified, the new component will subscribe to Redux store updates. This means that any time the store is updated, mapStateToProps will be called. The results of mapStateToProps must be a plain object, which will be merged into the component’s props. If you don't want to subscribe to store updates, pass null or undefined in place of mapStateToProps.
    mapDispatchToProps - If an object is passed, each function inside it is assumed to be a Redux action creator. An object with the same function names, but with every action creator wrapped into a dispatch call so they may be invoked directly, will be merged into the component’s props. If a function is passed, it will be given dispatch as the first parameter. It’s up to you to return an object that somehow uses dispatch to bind action creators in your own way. (Tip: you may use the bindActionCreators(https://redux.js.org/api/bindactioncreators) helper from Redux.)
*/
export default connect(mapStateToProps)(App)
