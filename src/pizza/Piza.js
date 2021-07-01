import React from 'react'
import './Piza.css'
import Product from '../product/Product'

function Piza() {
    return (
        <div className="piza">
            <div className="piza-wrapper">
                <div className="piza-size">
                <label className="label-piza" for="cars">Choose the pizza Size:</label>
                    <select className="pizza-option" name="cars" id="cars">
                        <option className="pizza-option-list"  value="Large">Large</option>
                        <option className="pizza-option-list" value="Medium">Medium</option>
                        <option className="pizza-option-list" value="Small">Small</option>
                        
                    </select>

                </div>

                <Product/>

            </div>
          
        </div>
    )
}

export default Piza
