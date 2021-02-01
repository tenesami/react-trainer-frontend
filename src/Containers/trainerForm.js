import React, { Component } from 'react'

class trainerForm extends Component {
    state = {
        trainers: {name: ""},
        loading: false,
    }
    
    handleOnChange = (e) => {
        this.setState({
            name: e.target.value
        })
    }

    handleOnSubmit =(e) => {
        e.preventDefault()
        const trainer = {...this.state.trainer}
        console.log(trainer)
    }
    render() {
        return (
            <div>
                <from onSubmit={this.handleOnSubmit}>
                    <input type="text" value={this.state.trainers.name} 
                    onChange={this.handleOnChange}/>
                    <button type={submit}> Add Trainer</button>

                </from>
            </div>
        )
    }
}
export default trainerForm;