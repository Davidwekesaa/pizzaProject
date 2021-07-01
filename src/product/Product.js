import React from 'react'
//import download from '../images/download.jpeg'
import './Product.css'
import {useStateValue} from '../redux/StateProvider'

function Product({tittle,prize,imgg,id}) {
    const [{basket},dispatch]= useStateValue()

    let pp = parseInt(prize)

        
    const AddToBasket =(e)=>{
         e.preventDefault()
        //add items to the basket
        dispatch({
            type: 'ADD_TO_BASKET',
            item:{
                id:id,
                tittle:tittle,
                prize:pp,
                imgg:imgg
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
                </p>
                           

            </div>
            <img src={imgg} alt="" className="procuct-image"/>
            <button className="add-to-basket" onClick={AddToBasket}>Add to basket</button>


            
            
            
            
        </div>




    )
}

export default Product
