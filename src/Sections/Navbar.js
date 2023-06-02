import { Link } from "react-router-dom"

function Navbar(){


    return <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <a className="navbar-brand" href="#">MoviesSnap</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <Link to="/about" className="nav-link">About MoviesSnap</Link>
        </li>

        <li className="nav-item">
          <Link to="/" className="nav-link">Sign In</Link>
        </li>

        <li className="nav-item">
          <Link to="/register" className="nav-link">Register</Link>
        </li>
       
      </ul>
    </div>
  </nav>



}

export default Navbar