import React,{useState,useEffect} from 'react'
import './Checkout.css'

import Basket from './Basket'
import download from '../images/download.jpeg'

import {useStateValue} from '../redux/StateProvider'
import axios from 'axios'



// import download from '../images/download.jpeg'
function Checkout() {
    const [{basket,userid},dispatch] = useStateValue()
    const [price,setPrice]=useState()
    const [basskect,setBasskect] = useState([])
    const [isLoading,setIsLoading]= useState(true)
    let pap = 0
    // useEffect(()=>{
    //     const bsk = async()=>{
    //         await axios.get(`/basket/${userid}`).then((basj)=>{
    //             setBasskect(basj.data)
    //             setIsLoading(false)
    //         })
            
    //     }
        
       
    //    bsk()
          
      
    // },[])

    useEffect(() => {
        

        basket.map((bask)=>(
                                    
            pap += bask.prize
           
        ))
      
       setPrice(pap)
       console.log(basket)
      });

    
    



       
    
          const CheckOut =(e)=>{
              e.preventDefault()

              basket.map((bk)=>{

                  const pkn = async()=>{
                       //add items to the basket
        await axios.post(`https://pizzaseerver.herokuapp.com/api/basket/${bk.id}/${userid}`).then((basket)=>{

            console.log(basket)

        })
                  }

                  pkn()
              })
    
              alert(`
              You have bought ${basket?.length} items at a cost of Ksh ${price}
              `)

              basket.map((kl)=>{
                dispatch({
                    type: 'Remove_items',
                   
                        id:kl.id,
                       
        
                })
        
                  console.log(kl.id)
              })
    
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
                                    
                                   
                                    <Basket id={baske.id}  tittle = {baske.tittle} prize={baske.prize} imgg={baske.imgg}/>
                                    
            
                                   
            
                                ))
                               
                            }
                          
                            
                     
                     
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
