import React from 'react'
import 'semantic-ui-css/semantic.min.css'
import { Item } from 'semantic-ui-react'
import { Button, Icon } from 'semantic-ui-react'
import {useHistory} from 'react-router-dom';

export default function AddToCart(props) {
    const history=useHistory()
    return <div style={{backgroundColor:"white",opacity:.8,borderRadius:5,width:"85%",padding:"5%"}}>
        <form onSubmit={props.handleSubmit}>
        <Item.Group divided>
    <Item>
        {/* product image need to be shown */}
      <Item.Image size='tiny' src='https://react.semantic-ui.com/images/wireframe/image.png' />
      {/* product code need to be shown */}
      <Item.Content verticalAlign='middle'>Content A &ensp;&ensp;&ensp;&ensp;<Icon name='times'/> {/* these will work as a button later on click the item will be deleted*/}</Item.Content>
    </Item>
    </Item.Group>
  <div style={{display:"flex",justifyContent:"flex-end"}}>
  <Button color="red" onClick={()=> history.push('/cart')}>Add to Cart</Button>
  </div>
  </form>
  </div>
}