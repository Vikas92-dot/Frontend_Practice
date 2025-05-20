import { Component } from "react";

export default class Counter extends Component{

    state = {
        name:'Taylor',
        age: 42
    };
    handleNameChange = (e)=>{
        this.setState({
            name: e.target.value
        });
    }
    handleAgeChange =()=>{
        this.setState({
            age: this.state.age + 1
        })
    }

    render(){
        return(
            <>
            <input onChange={this.handleNameChange} value={this.state.name}  type="text" />
            <button onClick={this.handleAgeChange}>Increment age</button>
            <p>Hello, {this.state.name}. You are {this.state.age}</p>
            </>
        )
    }
}