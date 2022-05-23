import React from "react"
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"

class Button extends React.Component{
    constructor(props){
        super(props);

        this.props = props;


    }

    render(){

        return (
            <button className="btn btn-lg btn-success" onClick={() => this.props.get_movies_prop()}>Get Movies</button>
        )

    }


}

export default Button