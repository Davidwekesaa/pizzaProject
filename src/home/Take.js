import React from 'react'
//import Navbar from '../navbar/Navbar'
//import Piza from '../pizza/Piza'
// import Additives from '../additives/Additives'
import './Take.css'
import background from '../images/background.jpeg'
import Product from '../product/Product'


function Take() {
    return (
        <div className="home">
       
        <div className="home-container">
         <img className="img"  src={background} alt=""/>
         <div className="home_row">
             <Product id="2346561" tittle = "piza tamu sana" prize="10450" imgg=""/>
              {/* {product} */}


              <Product id="2346541"  tittle = "piza tamu sana" prize="96000" imgg="https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/168964.jpg?output-format=auto&output-quality=auto"/>

         </div>
         <div className="home_row">
         <Product id="2346565" tittle = "piza tamu with nyama" prize="189000" imgg="https://i1.wp.com/yummy.co.ke/wp-content/uploads/2015/03/peperoni-1024x784.jpg?resize=960%2C735"/>
         <Product id="2546561" tittle = "piza tamu nyanya" prize="18900" imgg="https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/216054.jpg"/>
         <Product id="2386561"  tittle = "piza tamu sana" prize="13600" imgg="https://www.qsrmagazine.com/sites/default/files/styles/story_page/public/phut_0.jpg?itok=h30EAnkk"/>
                            
        

         </div>

         <div className="home_row">
         <Product id="2346521"  tittle = "piza tamu sana" prize="178900" imgg="https://i1.wp.com/yummy.co.ke/wp-content/uploads/2015/04/pizza-e1436856430175.jpg?fit=%2C&ssl=1"/>
             

         </div>

       
        
        </div>
       
            
        </div>
    )
}

export default Take
