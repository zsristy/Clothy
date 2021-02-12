import React,{useState} from 'react'
import 'semantic-ui-css/semantic.min.css'
import { Image, Reveal } from 'semantic-ui-react'
import { Rating , Icon} from 'semantic-ui-react'
import { Link } from "react-router-dom";

export default function Picturecard(props) {

    const [state,setState] =useState({})

    const handleRate = (e, { rating, maxRating }) =>
      setState({ rating, maxRating })

    return <div style={{margin:2, borderStyle:"solid",borderColor:"goldenrod",height:420,width:300}}>
        
    <Reveal animated='move up'>
    <Reveal.Content visible>
      <Image src={props.image} style={{height:350,width:300}}/>
    </Reveal.Content>
    <Reveal.Content hidden>
      <div style={{backgroundColor:"lightgrey",opacity:.5}} style={{height:350,width:300,display:"flex",justifyContent:"center"}}> 
      <Icon style={{marginTop:150}} name='shopping cart huge' />
      <p style={{marginTop:170,color:"black"}}>Shop now</p>
      </div>
    </Reveal.Content>
  </Reveal>
  <div style={{flexDirection:"column",marginTop:10}}>
  <Rating style={{paddingLeft:"50%"}} maxRating={5} icon='star' onRate={handleRate} />

  <i style={{fontSize:20,paddingLeft:"20%"}}>${props.prize}</i>
  <i style={{paddingLeft:"20%"}}><Link to="/seeproduct" style={{textDecoration:'none',color:"black"}}>See product</Link></i>
  </div>
    </div>
  }

  