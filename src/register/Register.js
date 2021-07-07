import React,{useState,useEffect,useRef} from 'react'
import './Register.css'
import download from '../images/download.jpeg'
import {useStateValue} from '../redux/StateProvider'
import axios from "axios"

function Register() {
    const [{user},dispatch] = useStateValue()
    const [username,setUsername] = useState()
    const [email,setEmail] = useState()
    const [password,setPassword] = useState()
    const [passwordd,setPasswordd] = useState()
    
    const submittt = async (e)=>{
        e.preventDefault()

        if(password === passwordd){
            await axios.post('https://pizzaseerver.herokuapp.com/api/auth/register',{
                username:username,
                email:email,
                password:password
            }).then((user)=>{
                // if(user.data !== null){
                //     console.log("succefully created the user")
                // }
                // else{
                //     console.log("user not created")
                // }
                console.log(user)
                dispatch({
                    type : 'Log_In',
                    name :user.data.username
                })

                dispatch({
                    type : 'Log_In_id',
                    id :user.data._id
                })
            })
             
        }
        else{
            console.log("passwords do not match")
        }

    

    }

   

    
    return (
        <div className="Login">
            <div className="login-container">
                
                    <form className="modal-content animate form">
       

  <div className="container">
    <label for="uname"><b>Username</b></label>
    <input type="text" placeholder="Enter Username" onChange={e=> setUsername(e.target.value)}  required/>

    <label for="uname"><b>Email</b></label>
    <input type="text" placeholder="Enter Email"  onChange={e=> setEmail(e.target.value)}  required/>

    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" min="6"  onChange={e=> setPassword(e.target.value)}  required/>

    <label for="psw"><b>Confirm Password</b></label>
    <input type="password" placeholder="Enter Password" min="6"  onChange={e=> setPasswordd(e.target.value)}  required/>

    <button className="button0" type="submit" onClick = {submittt}>Register</button>
    
  </div>

  
                        
                    
                </form>

             </div>
         
        </div>
    )
}

export default Register
