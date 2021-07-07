import React,{useState,useEffect} from 'react'
//import Navbar from '../navbar/Navbar'
//import Piza from '../pizza/Piza'
// import Additives from '../additives/Additives'
import './Home.css'
import background from '../images/background.jpeg'
import Product from '../product/Product'
import axios from 'axios'



function Home() {
    const [products,setProducts] = useState([])
    useEffect(()=>{
        const fetchData = async()=>{
            await axios.get('https://pizzaseerver.herokuapp.com/api/product/products').then((prod)=>{
                setProducts(prod.data)
                //console.log(prod)
            })
        }
       
        fetchData()

       
        
        
    },[])


    return (
        <div className="home">
       
        <div className="home-container">
         <img className="img"  src={background} alt=""/>
         <div className="home_row">
                
                  {
                
                    products.map((prod) =>(
                        

                        <Product key={prod._id} id={prod._id} tittle = {prod.heading} prize={prod.amount} imgg={prod.image}/>

                    ))
                    
                     

                    }
                
                   
             

           
          
              

         </div>
         

        

       
        
        </div>
       
            
        </div>
    )
}

export default Home
