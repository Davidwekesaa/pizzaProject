import React,{useEffect, useRef,useState} from 'react'
import './Login.css'
import download from '../images/download.jpeg'
import {useStateValue} from '../redux/StateProvider'
import axios from 'axios'
import {
    // BrowserRouter as Router,
    // Switch,
    // Route,
    Link,
    useHistory
  } from "react-router-dom";

function Login() {
    // const username = useRef()
    let history = useHistory()
    const [{user},dispatch] = useStateValue()
    const [email,setEmail] = useState()
    const [passwordd,setPasswordd] = useState()
    const [dis,setDis]= useState("none")
 
    useEffect(()=>{

    },[dis])
    const mystyle = {
        color : "red",
        display:`${dis}` ,
        
    }
    
   
    const Submitt = async (e) =>{
        e.preventDefault()
        
          await axios.post("https://pizzaseerver.herokuapp.com/api/auth/login",{
            email: email,
            password:passwordd
        })
        .then(( user)=>{
            if(user.data !== null){
                console.log(user.data.username)
                dispatch({
                    type : 'Log_In',
                    name :user.data.username
                })

                dispatch({
                    type : 'Log_In_id',
                    id :user.data._id
                })
            }
            else{
                console.log("error")
                setDis("block")
              
            }
           
           
        })

     
        
       
    }

    const Submi = () =>{

        dispatch({
            type : 'Log_In',
            name :null
        })

    }


    return (
        <div className="Login">
            <div className="login-container">

                 <hi style ={mystyle }>wrong email or password</hi>
                
                    <form className="modal-content animate form">
      

  <div className="container">
    <label for="uname"><b>Email</b></label>
    <input type="text" placeholder="Enter Email" onChange={e => setEmail(e.target.value)}  required/>

    <label  for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password"  required onChange={e => setPasswordd(e.target.value)}/>

    <button className="button8" onClick={Submitt} >Login</button>
    <button className="button2" onClick={Submi} >Register</button>
    
  </div>

  
                        
                    
                </form>

             </div>
         
        </div>
    )
}

export default Login
