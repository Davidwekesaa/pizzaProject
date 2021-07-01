import React,{useState,useEffect} from 'react'
import './Checkout.css'

import Basket from './Basket'
import download from '../images/download.jpeg'
//import download1 from '../images/1.jpg'
import download2 from '../images/2.jpg'
import download3 from '../images/3.jpg'
import download4 from '../images/4.jpeg'
import {useStateValue} from '../redux/StateProvider'



// import download from '../images/download.jpeg'
function Checkout() {
    const [{basket}] = useStateValue()
    const [price,setPrice]=useState()
    let pap = 0

    useEffect(() => {
        basket.map((bask)=>(
                                    
            pap += bask.prize
           
        ))
      
       setPrice(pap)
       console.log("rerander")
      });

      const CheckOut =(e)=>{
          e.preventDefault()

          alert(`
          You have bought ${basket?.length} items at a cost of Ksh ${price}
          `)

      }
    return (
        <div className="checkout">
            <div className="checkout-container">
                <div className="imggg">
                <img  src={download} alt=""/>
                </div>
                <h1>Orderd Products</h1>

                {
                    basket.map((baske)=>(
                       
                        <Basket id={baske.id} tittle = {baske.tittle} prize={baske.prize} imgg={baske.imgg}/>
                        

                       

                    ))
                }
               {/* <Basket id="1" tittle ="piza" prize="2123" imgg="https://i1.wp.com/yummy.co.ke/wp-content/uploads/2015/04/pizza-e1436856430175.jpg?fit=%2C&ssl=1"/> */}
                
         
         
            </div>



            <div className ="checkout-details" >
                    <div className="check">
                    <span>
                        <h3 className="h1">{`Number of Items: ${basket?.length} `}</h3>
                        <p className="p">
                            <strong>
                            {
                                 
                                  
                                   
                               `Total prize Ksh : ${price}`
                           }
                        

                            </strong>
                          
                        </p>
                    </span>

                    <button className="button" onClick={CheckOut}>Check out</button>


                    </div>
                    </div>
                    

            
        </div>
    )
}

export default Checkout
