import React from 'react'
import 'semantic-ui-css/semantic.min.css'
import { Item } from 'semantic-ui-react'
import { Button, Icon } from 'semantic-ui-react'

export default function CartList(props) {
    return <div style={{backgroundColor:"white",opacity:.8,borderRadius:5,width:"85%",padding:"5%"}}>
        <form onSubmit={props.handleSubmit}>
  <Item.Group>
    <Item>
  {/* product image need to be shown */}
      <Item.Image size='tiny' src='https://react.semantic-ui.com/images/wireframe/image.png' />

      <Item.Content>
         {/* product details need to be shown */}
        <Item.Header>Header &ensp;&ensp;&ensp;&ensp;<Icon name='times'/>{/* these will work as a button later on click the item will be deleted*/} </Item.Header>
        <Item.Meta>Description</Item.Meta>
        <Item.Description> Additional Details
        </Item.Description>
      </Item.Content>
    </Item>
  </Item.Group>
  <div style={{display:"flex",justifyContent:"flex-end"}}>
  <Button color="red" type="submit">Checkout</Button>
  </div>
  </form>
  </div>
}