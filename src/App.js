
import './App.css';
import Home from './home/Home';
import Navbar from './navbar/Navbar';
import Login from './login/Login'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";

import Checkout from './checkout/Checkout'
import {useStateValue} from './redux/StateProvider'


function App() {
  const [{user},dispatch]= useStateValue()
  console.log(user? "ok" : <Login/>)
  return (
    <Router>
    <div className="App">
    <Navbar/>

    
    <Switch>

       
     
       
<Route exact path="/">
  {user? <Home/> :  <Login/>}
  

 </Route>
  <Route path="/checkout">
  
  <Checkout/>

 </Route>



</Switch>

    
     
      
      
    </div>
    </Router>
  );
}

export default App;
