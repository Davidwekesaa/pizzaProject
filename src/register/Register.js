import React,{useState,useEffect,useRef} from 'react'
import './Register.css'
import download from '../images/download.jpeg'

function Register() {
    return (
        <div className="Login">
            <div className="login-container">
                
                    <form className="modal-content animate form">
       

  <div className="container">
    <label for="uname"><b>Username</b></label>
    <input type="text" placeholder="Enter Username"  required/>

    <label for="uname"><b>Email</b></label>
    <input type="text" placeholder="Enter Email"  required/>

    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password"  required/>

    <label for="psw"><b>Confirm Password</b></label>
    <input type="password" placeholder="Enter Password"  required/>

    <button className="button" type="submit">Register</button>
    
  </div>

  
                        
                    
                </form>

             </div>
         
        </div>
    )
}

export default Register
