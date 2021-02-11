import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/home";
import GoToCart from "./components/cart";

function App() {
  return (
    <div className="App">
       <BrowserRouter>    
        <div>
          <Route path="/" exact component={Home} />
          <Route path="/cart" exact component={GoToCart} />
        </div>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
