import React, { Component } from "react"

class Button extends Component{

    render(){

        return <button onClick={() => this.props.greeting('Joshua')}>Sign Up Now {this.props.name}</button>

    }



}


export default Button