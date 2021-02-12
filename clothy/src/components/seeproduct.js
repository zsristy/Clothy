import React,{useState} from "react";
import MyNavbar from "./mynavbar";

import backgroundimage3 from "../images/image1.jpg";
import { Button} from 'semantic-ui-react'

import {useHistory} from 'react-router-dom';

export default function SeeProduct(props) {
    const state=props.location.state;
    const history=useHistory();
    
   
  return <div>
      
    <div
              className="backimage"
              style={{
                minHeight:600,
                width:"100%",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundImage: "url(" + backgroundimage3 + ")",
              }}>
            <MyNavbar></MyNavbar>
            <div className="row" style={{margin:0}}>
            <div className="col s12">
                    <div className="col s7"style={{display:"flex",justifyContent:"center"}} >
                {/* an image of product will be shown */}
                    </div>
                    <div className="col s5"style={{display:"flex",justifyContent:"center"}} >
                {/* details of product will be shown in a card*/}   
                    </div>
            </div>
            </div>
            <div style={{display:"flex",justifyContent:"center",margin:50}}>
            <Button color="yellow" onClick={()=>history.push('/')}>
                Go to Product
            </Button>
                </div>
              
      </div>
  </div>
}