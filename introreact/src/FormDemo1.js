import React, { Component } from 'react'

export default class FormDemo1 extends Component {
    state={username:""};
    onChangeHandlder=(event)=>{
        this.setState({username:event.target.value})    
    }
    render() {
        return (
            <div>  
                <form onSubmit={this.onSumbitHandler}>
                    <h3>USERNAME</h3>
                    <input type="text" onChange={this.onChangeHandlder}></input>
                    <h3>username is {this.state.username}</h3>
                </form>         
            </div>
        )
    }
}
