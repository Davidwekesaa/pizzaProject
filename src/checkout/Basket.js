import React from 'react'
import './Basket.css'
import {useStateValue} from '../redux/StateProvider'


function Basket({tittle,prize,id,imgg}) {
    const [{basket},dispatch]=useStateValue()

    const RemoveFormBasket =(e)=>{
        e.preventDefault()
        dispatch({
            type: 'Remove_from_Basket',
           
                id:id,
               

        })


    }
    return (
        <div className="productt">
        <div className="product-info0">
            <p>{tittle}</p>
            <p className="product-pricee">
                <small>Ksh</small>
                <strong>{prize}</strong>
            </p>
            <img src={imgg} alt="" className="procuct-imagee"/>

        </div>
        <button className="Removee" onClick={RemoveFormBasket}>Remove</button>
        
        
    </div>
    )
}

export default Basket
