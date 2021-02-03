import React, {Component} from 'react'
import './App.css';
import { connect } from 'react-redux' 
import {getTrainers} from './Actions/trainers'
import TrainerForm from './Containers/TrainerForm'

class App extends Component {
  
  componentDidMount(){
    this.props.getTrainers()
  }

  render(){
    const trainersLi = this.props.trainers.map(td => <li key={td.id}> {td.t_name}</li>)
    return (
      <div className="App">

          <h2>Create trainer</h2>
          <TrainerForm/>
          <hr/>
          <h1>Our Trainers</h1>

          <ul>
              <h3>{this.props.loading ? <h3>Lodding...</h3> : trainersLi}</h3>
          </ul>   
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



