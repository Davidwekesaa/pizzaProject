import React,{useEffect, useRef,useState} from 'react'
import './Login.css'
import download from '../images/download.jpeg'
import {useStateValue} from '../redux/StateProvider'

function Login() {
    // const username = useRef()
    const [{user},dispatch] = useStateValue()
    const [username,setUsername] = useState()
    const Submitt = () =>{
        console.log(username)
        dispatch({
            type : 'Log_In',
            name : username
        })
    }


    return (
        <div className="Login">
            <div className="login-container">
                
                    <form className="modal-content animate form">
      

  <div className="container">
    <label for="uname"><b>Username</b></label>
    <input type="text" placeholder="Enter Username" onChange={e => setUsername(e.target.value)}  required/>

    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password"  required/>

    <button className="button" onClick={Submitt} >Login</button>
    
  </div>

  
                        
                    
                </form>

             </div>
         
        </div>
    )
}

export default Login
