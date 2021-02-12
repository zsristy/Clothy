import React,{useState} from "react";
import MyNavbar from "./mynavbar";
import CardList from "./cartlist";
import Checkout from "./cheackout";
import backgroundimage2 from "../images/image6.jpg";
import { Button} from 'semantic-ui-react'

import {useHistory} from 'react-router-dom';

export default function GoToCart() {
    const history=useHistory()
    const [check,setCheck]=useState(0)
    const handleSubmit= async(event)=>{
        event.preventDefault();
        setCheck(1);
      }
   
  return <div>
      
    <div
              className="backimage"
              style={{
                minHeight:600,
                width:"100%",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundImage: "url(" + backgroundimage2 + ")",
              }}>
            <MyNavbar></MyNavbar>
            <div className="row" style={{margin:0}}>
                <div className="col s12">
                    <div className="col s7" style={{display:"flex",justifyContent:"center"}}>
                    {check!=1 ?<CardList handleSubmit={handleSubmit}></CardList>:""}
                    </div>
                    <div className="col s5" style={{display:"flex",justifyContent:"center"}}>
                    {check!=0 ?<Checkout></Checkout>:""}
                    </div>

                </div>
            </div>
            <div style={{display:"flex",justifyContent:"center",margin:50}}>
            <Button color="yellow" onClick={()=> history.push('/')}>
        Go to Product
      </Button>
                </div>
              
      </div>
  </div>
}