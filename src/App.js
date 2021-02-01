import React, {Component} from 'react'
import './App.css';
import { connect } from 'react-redux' 
import {getTrainers} from './Actions/trainers'

class App extends Component  {
  render(){
    const trainersLi = this.props.trainers.map(td => <li key={td.id}> {td.name}</li>)
    return (
      <div className="App">
        <header className="App-header">
          <h2>Create trainer</h2>
          <hr/>
          <h1>Our Trainers</h1>

          <ul>
              {this.props.loading ? <h3>Lodding...</h3> : trainersLi}
          </ul>
          
        </header>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log("I am state", state)
  return {
    trainers: state.trainerReducer.trainers,
    loading: state.trainerReducer.loading
  }
}

export default connect(mapStateToProps, {getTrainers})(App);

