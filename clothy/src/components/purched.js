import React,{useState} from "react";
import MyNavbar from "./mynavbar";

import backgroundimage3 from "../images/image7.jpg";
import { Button} from 'semantic-ui-react'

import {useHistory} from 'react-router-dom';

export default function Purched(props) {
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
            <div className="col s12">
                    <div className="col s5" style={{display:"flex",justifyContent:"center",padding:100}}>
                    <h1>Thank You for Purchasing Product form Clothy<br/>
                    <h2 style={{paddingLeft:"25%"}}>Your Purchase ID: {state.no}</h2></h1>
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