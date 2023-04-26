import React, { Component} from "react"

import "bootstrap/dist/css/bootstrap.min.css"
import "./album.css"

import "bootstrap/dist/js/bootstrap.min.js"

import axios from "axios"

class App extends Component{

    constructor(){
        super()

        this.moviesResult = []

        this.state = {
            movies: [],
            favourites_movies: this.getCurrentStorageCount()
        }


    }

    getCurrentStorageCount(){
        let fav_movies_storage = localStorage.getItem("movies_favourites");

        if(fav_movies_storage == null || typeof fav_movies_storage == undefined){
            return 0;
        }

        const fav_movies_array = JSON.parse(fav_movies_storage);

        return fav_movies_array.length;
    }


    addToFavourites(event, movie, index){

      console.log(event.target.innerHTML)
      // alert(index)
      //console.log(movie)

      event.target.classList.remove("btn-outline-secondary");
      event.target.classList.add("btn-outline-danger");
      event.target.innerHTML = "Added to Favourites";

      //proceed to adding to locaStorage
      let fav_movies_storage = localStorage.getItem("movies_favourites");

      movie["custom_index"] = index;

      if(fav_movies_storage == null || typeof fav_movies_storage == undefined){
        let fav_movies_array = [];
        fav_movies_array.push(movie)
        //there is no storage
        localStorage.setItem("movies_favourites", JSON.stringify(fav_movies_array));

  
        //update the state by 1
        this.setState((prevState) => ({
            favourites_movies: prevState.favourites_movies + 1
        }))

      }else{
          //there is now a storage
          let fav_movies_array = JSON.parse(fav_movies_storage);

          fav_movies_array.push(movie)

          localStorage.setItem("movies_favourites", JSON.stringify(fav_movies_array));

          //update the state by 1
          this.setState((prevState) => ({
            favourites_movies: prevState.favourites_movies + 1
          }))


      }


    }

    render(){

        axios.get("http://www.omdbapi.com/?s=Spiderman&apikey=81e3fca8").then((results) => {

        //console.log(results)

        this.setState({
            movies: results.data.Search
        })

       this.moviesResult = this.state.movies.map(( movie, index ) => {

        return (
        <div class="col-md-4" key={index}>
        <div class="card mb-4 shadow-sm">
          <img src={movie.Poster} />

          <div class="card-body">
            <p class="card-text">{movie.Title}</p>
            <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group">
                <button type="button" class="btn btn-sm btn-outline-secondary" onClick={(event) => this.addToFavourites(event, movie, index)}>Add to Favourites</button>
              </div>
              <small class="text-muted">9 mins</small>
            </div>
          </div>
        </div>
      </div>
      )
    
    })



    })

     
    return <div>
<header class="">
<nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
  <a class="navbar-brand" href="#">MoviesBase</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarText">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Features</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Pricing</a>
      </li>
    </ul>
    <span class="navbar-text">
      {this.state.favourites_movies} favourites
    </span>
  </div>
</nav>        
</header>
 

<main role="main">

  <section class="jumbotron text-center">
    <div class="container">
      <h1>Movies Base</h1>
      <p class="lead text-muted">Access all the movies that you love in one place...</p>
      <p>
        <a href="#" class="btn btn-primary my-2">Get Started</a>
    
      </p>
    </div>
  </section>

  <div class="album py-5 bg-light">
    <div class="container">

      <div class="row">
        {this.moviesResult}
      </div>
    </div>
  </div>

</main>

<footer class="text-muted">
  <div class="container">
    <p class="float-right">
      <a href="#">Back to top</a>
    </p>
    <p>Album example is &copy; Bootstrap, but please download and customize it for yourself!</p>
    <p>New to Bootstrap? <a href="/">Visit the homepage</a> or read our <a href="/docs/4.6/getting-started/introduction/">getting started guide</a>.</p>
  </div>
</footer>

                </div>


    }

}

export default App;
