import Navbar from "./Sections/Navbar"
import { Link } from "react-router-dom"
import { useState } from "react"

function Register(){

    const [currentState, setState] = useState({
        firstname: "",
        lastname: "",
        username: "",
        email: "",
        password: "",
        password_confirm: "",
        form_errors: []
    })


    const registerUser = (event) => {
        event.preventDefault();

        console.log("Form submitted: ", currentState)

        const errors = []

        if(currentState.firstname.trim().length === 0){
            errors.push("First name is required")
        }

        if(currentState.lastname.trim().length === 0){
            errors.push("Last name is required")
        }

        if(currentState.username.trim().length === 0){
            errors.push("Username is required")
        }

        if(currentState.email.trim().length === 0){
            errors.push("Email is required")
        }

        if(currentState.password.trim().length === 0){
            errors.push("Password is required")
        }

        if(currentState.password_confirm.trim().length === 0){
            errors.push("Please confirm your password")
        }

        if(currentState.password !== currentState.password_confirm){
            errors.push("Passwords do not match!")
        }


        setState({
            ...currentState,
            form_errors: errors
        })

        if(errors.length == 0){
            //there are no errors
            

            
        }else{
            //there are errors
        }



    }


    // const handleInputUpdate = (event) => {
    //     //
    //     if(event.target.name === "firstname"){
    //         //
    //     }
        
    // }


    const handleFirstname = (event) => {

        console.log("First name: ", event)
        let firstname = event.target.value.trim();

        if(firstname.length > 0){
            setState({
                ...currentState,
                firstname: firstname
            })
        }else{
            //

        }
    }

    const handleLastname = (event) => {

        let lastname = event.target.value.trim();

        if(lastname.length > 0){
            setState({
                ...currentState,
                lastname: lastname
            })
        }else{
            //

        }
    }

    const handleEmail = (event) => {

        let email = event.target.value.trim();

        if(email.length > 0){
            setState({
                ...currentState,
                email: email
            })
        }else{
            //

        }
    }

    const handleUsername = (event) => {

        let username = event.target.value.trim();

        if(username.length > 0){
            setState({
                ...currentState,
                username: username
            })
        }else{
            //

        }
    }


    const handlePassword = (event) => {

        let password = event.target.value.trim();

        if(password.length > 0){
            setState({
                ...currentState,
                password: password
            })
        }else{
            //

        }
    }


    const handlePasswordConfirm = (event) => {

        let password_confirm = event.target.value.trim();

        if(password_confirm.length > 0){
            setState({
                ...currentState,
                password_confirm: password_confirm
            })
        }else{
            //
        }
    }

    // - current_form_errors: for capturing the updated states from the 
    // event listeners as indicated above
    let current_form_errors = currentState.form_errors;
    let processed_errors;
    processed_errors = current_form_errors.map((current_form_error, index) => {

        return <div className='alert alert-danger'>{current_form_error}</div>

         
    })



    return  <>
    <Navbar />
    <div className="row">
                <div class="col-md-6 mt-5 mx-auto">
                <div className="card">
                <div className="card-body">
                    <h4>Register</h4>
                    <hr />
                        {processed_errors}
                    <form className="form" onSubmit={registerUser} method="POST">

                    <div className="form-group">
                            <label>First name: </label>
                            <input type="text" name="firstname" onChange={handleFirstname} className="form-control" />
                        </div>

                        <div className="form-group">
                            <label>Last name: </label>
                            <input type="text" name="lastname" onChange={handleLastname} className="form-control" />
                        </div>

                        <div className="form-group">
                            <label>Email: </label>
                            <input type="email" name="email" onChange={handleEmail} className="form-control" />
                        </div>


                        <div className="form-group">
                            <label>Username: </label>
                            <input type="text" name="username" onChange={handleUsername} className="form-control" />
                        </div>

                        <div className="form-group">
                            <label>Password: </label>
                            <input type="password" name="password" onChange={handlePassword} className="form-control" />
                        </div>

                        <div className="form-group">
                            <label>Confirm Password: </label>
                            <input type="password" name="password_confirm" onChange={handlePasswordConfirm} className="form-control" />
                        </div>

                        <div className="form-group">
                            <button className="btn btn-primary">Register</button>
                        </div>

                        <hr />

                        <h6>Already Registered? <Link to="/"><strong>Sign in instead</strong></Link></h6>

                    </form>
                </div>

            </div>

                </div>

            </div>
    </>


}

export default Register