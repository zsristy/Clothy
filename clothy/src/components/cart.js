import React from "react";
import MyNavbar from "./mynavbar";
import Picturecard from "./pictureCard";
import backgroundimage2 from "../images/image6.jpg";

import {Link,useHistory} from 'react-router-dom';

export default function GoToCart() {
   
  return <div>
      
    <div
              className="backimage"
              style={{
                height:600,
                width:"100%",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundImage: "url(" + backgroundimage2 + ")",
              }}>
            <MyNavbar></MyNavbar>
            <div>

            </div>
            
              
      </div>
  </div>
}