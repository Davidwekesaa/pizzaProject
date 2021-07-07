import React,{useState,useEffect} from 'react'
import './Navbar.css'
import download from './download.jpeg'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import LocalPizzaIcon from '@material-ui/icons/LocalPizza';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import axios from 'axios'
import {
    // BrowserRouter as Router,
    // Switch,
    // Route,
    Link,
    
  } from "react-router-dom";
  import {useStateValue} from '../redux/StateProvider'



function Navbar() {
    
    const [{basket,user,userid},dispatch]= useStateValue()
     const [baskk,setBaskk]=useState([])
    //  useEffect(()=>{
    //      const p = async() =>{
            
    //             await axios.get(`/basket/${userid}`).then((basj)=>{
    //                 // console.log(basj)
    //                 // console.log(userid)
    //                 setBaskk(basj.data)
    //             })
                
            
           
            
    //      }
    //      p()
    //      console.log(`baskk -== ${baskk}`)
    //  },[])

    const logout = () =>{
        dispatch({
            type : 'Log_In',
            name :""
        })

        dispatch({
            type : 'Log_In_id',
            id :""
        })
    }
    
    return <>
        <div className="Navbar">
           <div className="Navbar-Content">
               <div className="Navbar-Content-logo">
                   <Link to="/">
                   <LocalPizzaIcon className="pizza-icon"/>
                     </Link >
                     <h1 className="logo"> PizzaPlace</h1>
                   

               </div>
               <div className="Navbar-Content-menu">
                   <ul className="Navbar-Content-menu-list">
                   <Link to="/">
                   <li className="Navbar-Content-menu-list-item active">Home</li>
                     </Link >
                      
                       <li className="Navbar-Content-menu-list-item">Menu</li>
                      
                   </ul>
                   <div className="search">
                   <input className="search-field" placeholder="search for pizza"/>
                  
                
                   </div>
                   <SearchIcon className="searchIcon"/>
                   
                   
                  
                </div>
               <div className="Navbar-profile">
                   <img src={download} alt="" className="Navbar-profile-picture"/>
                   <div className="Navbar-profile-text">

                   {
                        <span className="profile-text">

                       
                        <p className="welcome">
                           <samll >welcome</samll> 
                        
                        </p>
                        <p className="userr">
                        <h4 >{user}</h4>
                        </p>

                       
                       
                    </span>
                            
                        }

                        
                      
                   </div>
                 <Link to="/checkout">
                 <ShoppingBasketIcon className="basket"/>
                 </Link>
                   
                   <span className="basket-items">
                       {basket?.length}
                   </span>

                
                 <ExitToAppIcon className="basket" onClick={logout}/>
                 
                 
                  

                  
               </div>

           </div>

            
        </div>
    </>
}

export default Navbar
