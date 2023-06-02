import { useState } from "react";
import Navbar from "./Sections/Navbar";
import { Link } from "react-router-dom"

function Login(){

    return  <>
    <Navbar />
    <div className="row">
                <div class="col-md-6 mt-5 mx-auto">
                <div className="card bg-dark text-white">
                <div className="card-body">
                    <h4>Log in</h4>
                    <hr />

                    <form className="form" method="POST">
                        <div className="form-group">
                            <label>Username: </label>
                            <input type="text" className="form-control" />
                        </div>

                        <div className="form-group">
                            <label>Password: </label>
                            <input type="password"  className="form-control" />
                        </div>

                        <div className="form-group">
                            <button className="btn btn-primary">Log in</button>
                        </div>

                        <hr />

                        <h6>Not Registered? <Link to="/register"><strong>Register Now</strong></Link></h6>

                    </form>
                </div>

            </div>

                </div>

            </div>
    </>

}

export default Login