import React from 'react'
//import download from '../images/download.jpeg'
import './Product.css'
import {useStateValue} from '../redux/StateProvider'
import axios from 'axios'

function Product({tittle,prize,imgg,id,key}) {
    const [{basket,userid},dispatch]= useStateValue()

    let pp = parseInt(prize)

        
    const AddToBasket = async(e)=>{
         e.preventDefault()
        //add items to the basket
        // await axios.post(`/basket/${id}/${userid}`).then((basket)=>{

        //     console.log(basket)

        // })

        dispatch({
            type: 'ADD_TO_BASKET',
            item:{
                id:id,
                tittle:tittle,
                prize:prize,
                imgg:imgg,
                key:key,
                
            }
        })
     
        
    }
    return (
        <div className="product">
            <div className="product-info">
                <p className="tittle">{tittle}</p>
                <p className="product-price">
                    <small>Ksh</small>
                    <strong className="price">{prize}</strong>
                    {/* {console.log(id)} */}
                </p>
                           

            </div>
            <img src={imgg} alt="" className="procuct-image"/>
            <button className="add-to-basket" onClick={AddToBasket}>Add to basket</button>


            
            
            
            
        </div>




    )
}

export default Product
