import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route,useHistory } from "react-router-dom";
import Home from "./components/home";
import GoToCart from "./components/cart";
import Purched from "./components/purched"

function App() {
  const history=useHistory();
  return (
    <div className="App">
       <BrowserRouter history={history}>    
        <div>
          <Route path="/" exact component={Home} />
          <Route path="/cart" exact component={GoToCart} />
          <Route path="/purched" exact component={Purched} />
        </div>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
