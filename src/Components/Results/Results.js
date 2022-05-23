import React from "react";

class Results extends React.Component{

    constructor(props){
        super(props)

        this.props = props;
    }

    render(){

        console.log(this.props.results_prop);

        let rentMovieButton;
        if(this.props.results_prop.is_data_available != false){
            rentMovieButton = <button className='btn btn-sm btn-primary'>Rent Movie</button>
        }else{
            rentMovieButton = <React.Fragment></React.Fragment>
        }

        return (
                <div className='mt-5'>
                    <img src={this.props.results_prop.poster} alt='' />
                    <h4>{this.props.results_prop.title}</h4>
                    <h5>{this.props.results_prop.actors}</h5>
                    <h6>{this.props.results_prop.country}</h6>
                    {rentMovieButton}
                </div>)

    }


}

export default Results