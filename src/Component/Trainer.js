import React, { Component } from 'react'
import {connect } from 'react-redux'
import {getTrainer } from '../Actions/trainers'

 class Trainer extends Component {

    render(){
        const trainerList =  this.props.trainers.map(trainer => {
            return  <Trainer key={trainer.id} id={trainer.id} name={trainer.t_name} />
        })

        return (
            <div>
               {trainerList }
            </div>
        )

    }
 }
export default Trainer;
   