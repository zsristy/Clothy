import React from 'react'
import 'semantic-ui-css/semantic.min.css'
import { Item } from 'semantic-ui-react'
import { Button, Icon } from 'semantic-ui-react'

export default function CardList(props) {
    return <div style={{backgroundColor:"white",opacity:.8,borderRadius:5,width:"85%",padding:"5%"}}>
        <form onSubmit={props.handleSubmit}>
  <Item.Group>
    <Item>
      <Item.Image size='tiny' src='https://react.semantic-ui.com/images/wireframe/image.png' />

      <Item.Content>
        <Item.Header>Header &ensp;&ensp;&ensp;&ensp;<Icon name='times'/> </Item.Header>
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