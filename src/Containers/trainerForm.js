import React, { Component } from 'react';
import {addTrainer} from '../Actions/trainers';
import {connect} from 'react-redux';

class TrainerForm extends Component {
    state = {
        trainer: {t_name: ""},
        loading: false
    }
    
    handleOnChange = (e) => {
        this.setState({...this.state,
           trainer: { ...this.state.trainer,
               t_name: e.target.value
            }
        })
    }

    handleOnSubmit = (e) => {
        e.preventDefault()
        const trainer = {...this.state,}
        
        this.props.addTrainer(trainer)
        this.setState({
            trainer: {t_name: ""},
        loading: false
        })
    }
    
    render() {
        return (
            <div>
                <form onSubmit={this.handleOnSubmit}>
                    <input type="text" value={this.state.trainer.t_name} 
                    onChange={this.handleOnChange}/>
                    <button type="submit"> Add Trainer</button>
                </form>
            </div>
        )
    }
}


export default connect(null, {addTrainer})(TrainerForm);