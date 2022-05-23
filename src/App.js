import logo from './logo.svg';
import './App.css';
import Button from './Components/Button/Button';
import Results from './Components/Results/Results';
import React from 'react';
import axios from "axios"

class App extends React.Component{
  constructor(){
    super()

    this.state = {
        result: {
          poster: null,
          title: null,
          actors: null,
          country: null,
          is_data_available: false
        }
    }
  }

  getMovies = () => {
    
    axios.get("http://www.omdbapi.com/?i=tt3896198&apikey=81e3fca8").then((feedback) => {

      console.log(feedback.data);
      //pass to the UI
      if(feedback.status == 200){
        //I can proceed
        //let result = feedback.data.Poster
        let result = {
          poster: feedback.data.Poster,
          title: feedback.data.Title,
          actors: feedback.data.Actors,
          country: feedback.data.Country,
          is_data_available: true
        }
        
        //change state of result
        this.setState({
          result: result
        })

      }else{
        //error 
      }

    })
    


  }

  render(){

    let resultsComponent;

    if(this.state.result == null){
    
        resultsComponent = <Results />
    }else{
      resultsComponent = <Results results_prop={this.state.result}  />
    }

    return (
      <div className="App">
        <header className="App-header">
          <h3>
            Get Latest Movies Now
          </h3>
          <Button get_movies_prop={this.getMovies}/>
          {resultsComponent}
        </header>
      </div>
    );
  }

  // componentDidUpdate(){

  // }

}

export default App;
