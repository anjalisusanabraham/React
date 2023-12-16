import React, { Component } from "react";
class Class extends React.Component{
    constructor(props){
        console.log('this is my constructor');
        super(props);
        this.state = {
            count : 0
        }
    }
    componentDidMount(){
        console.log("did mount")
    }
     add =() =>{
        console.log(this.state.count += 1)
    }
    static getDerivedStateFromProps(props,state){
        console.log("get")
    }
    render(){
        return(
         <div>
                <h1>This is my class component</h1>
                <p>{this.props.name}</p>
                <p>{this.state.count}</p>
                <button onClick={this.add}>Add</button>
        </div>
        )
    }
}
export default Class;