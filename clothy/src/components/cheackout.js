import 'semantic-ui-css/semantic.min.css'
import { Header, Table } from 'semantic-ui-react'
import { Button} from 'semantic-ui-react'
import { Link } from "react-router-dom";



export default function Checkout(props) {
    const no = Math.floor(Math.random() * 100000);

    return <div style={{backgroundColor:"white",opacity:.8,borderRadius:5,width:"85%",padding:"5%"}}>
  <Table basic='very' celled collapsing>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Product Id</Table.HeaderCell>
        <Table.HeaderCell>Prize &ensp;</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell>
          <Header>
            {/* product details need to be shown */}
            <Header.Content>
              Item 1
            </Header.Content>
          </Header>
        </Table.Cell>
        <Table.Cell>180</Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
  <div style={{display:"flex",justifyContent:"flex-end"}}>
  <Button color="red"><Link style={{textDecoration:'none',color:"white"}} to={{pathname:"/purched" , 
      state: {no: no, 
    }}}>Buy</Link></Button>
  </div>
  </div>
}