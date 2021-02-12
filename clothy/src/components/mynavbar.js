import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

export default function MyNavbar() {
  return (
    <Navbar
    style={{
      backgroundColor: "#ffffff00",
      outline: "none",
      boxShadow: "none",
    }}
    variant="dark"
    >
      <Navbar.Brand style={{ fontSize: 30,color:"black",fontWeight:"bold",paddingLeft:10}}>Clothy</Navbar.Brand>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item style={{ margin: 10}}><Link to="/" style={{textDecoration:'none',color:"black",fontWeight:"bold"}}>Home</Link></Nav.Item>
          <Nav.Item style={{ margin: 10}}><Link to="/cart" style={{textDecoration:'none',color:"black",fontWeight:"bold"}}>Go to Cart</Link></Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

