import React from "react";
import MyNavbar from "./mynavbar";
import Picturecard from "./pictureCard";
import AddToCart from "./addproduct";
import Footer from "./footer";
import backgroundimage1 from "../images/image1.jpg";
import image5 from "../images/image5.jpg"
import profile from "../images/profile.jpg"
import photo1 from "../images/gallary1.jpg";
import photo2 from "../images/gallary2.jpg";
import photo3 from "../images/gallary3.jpg";
import photo4 from "../images/gallary4.jpg";
import photo5 from "../images/gallary5.jpg";
import photo6 from "../images/gallary6.jpg";
import photo7 from "../images/gallary7.jpg";
import photo8 from "../images/gallary8.jpg";
import photo9 from "../images/gallary9.jpg";
import photo10 from "../images/gallary10.jpg";
import photo11 from "../images/gallary11.jpg";
import photo13 from "../images/gallary13.jpg";
import photo14 from "../images/gallary14.jpg";
import photo15 from "../images/gallary15.jpg";
import photo16 from "../images/gallary16.jpg";
import photo17 from "../images/gallary17.jpg";
import photo18 from "../images/gallary18.jpg";

import {Link,useHistory} from 'react-router-dom';

export default function Home() {
    // primarily used some downloaded photos as product picture And hardcode them as an array.
  const photoandprize=[{id:1,photo: photo1,prize: 120},
    {id:2,photo: photo2,prize: 150},
    {id:3,photo: photo3,prize: 130},
    {id:4,photo: photo4,prize: 140},
    {id:6,photo: photo6,prize: 180},
    {id:7,photo: photo7,prize: 190},
    {id:8,photo: photo8,prize: 170},
    {id:9,photo: photo9,prize: 175},
    {id:10,photo: photo10,prize: 160},
    {id:11,photo: photo11,prize: 120},
    {id:13,photo: photo13,prize: 110},
    {id:14,photo: photo14,prize: 180},
    {id:15,photo: photo15,prize: 170},
    {id:16,photo: photo16,prize: 165},
]
  //used some default prize for each product.

  const history = useHistory();
  const myClick=()=>{
    history.push();
  }
  return <div>
      
    <div
              className="backimage"
              style={{
                height:500,
                width:"100%",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundImage: "url(" + backgroundimage1 + ")",
              }}>
            <MyNavbar></MyNavbar>
            
              <div style={{backgroundColor:"whitesmoke", opacity:.6, height:200,marginTop:150}}>
                            <h1 style={{color:'black',marginLeft:'38%',fontSize:40}}><i ><br></br>It is not only about Cloth<br></br> &ensp;&ensp;&ensp;&ensp; It is about Comfort</i></h1>
              </div>
      </div>
      <div className="row" style={{marginTop:100, marginBottom:100, width:'100%'}}>
              <div className='col s6'>
                            <div className="row" style={{position:"relative", left:10, top:0}}>
                            <img style={{height:300,width:440,position:"relative", left:0, top:0}} src={image5}></img>
                            <img style={{height:300,width:300,position:"absolute", left:300, top:180,borderRadius:"50%"}} src={profile}></img>
                            {/* here later add a profile picture of Sarah */}
                            </div>
              </div>
              <div className='col s6'
                            style={{margin:80,
                              background:"whitesmoke",
                              opacity:.6}}>
                            <h2 style={{marginTop:50,marginLeft:50}}><i>Welcome To Clothy</i></h2>
                            <p style={{textAlign:"justify", margin:50}}>
                            Hi, I am Sarah. It is my first online clothing store. Inspired by "Oscar de la Renta",
                            I also believe that "Being well dressed hasn't much to do with having good clothes. 
                            It’s a question of good balance and good common sense." The dresses of "Clothy" 
                            are simple and aesthetic in design at the same time very comfortable.Choose your own product.</p>
              </div>
      </div>
      <div className='row' style={{marginTop:150, marginBottom:100, width:'100%'}}>
        <div className='col s12'>
              <div className='col s3'>
                  <div style={{backgroundColor:'goldenrod', height:50,textAlign:'center',padding:5}}>
                <h1><i style={{color:"whitesmoke",fontSize:35}}>Clothy's Collection</i></h1>
                </div>
                
                <div style={{background:"whitesmoke",
                            marginTop:50}}>
                          {/* all the selected item will be shown here while selecting and this need to be appeared after selecting product */}
                          <AddToCart></AddToCart>  
                </div>
              </div>                
              <div className='col s9'>
                <div>
                  {/* filtering and sorting ber need to be added */}
                </div>
                <div>
                <div className='row' style={{position:"relative", left:0, top:0,marginLeft:60}}>
                            {photoandprize.map((pp)=>{
                            return( 
                              // picture card of item will be appeared
                            <Picturecard id={pp.id} image={pp.photo} prize={pp.prize}></Picturecard >
                              )
                            })}                           
                </div>
                </div>
              </div> 
              </div> 
      </div>
      <Footer></Footer>
  </div>
}