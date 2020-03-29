import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import {
    
    Link,
    useParams
  } from "react-router-dom";



function Menu() {
   /* const {id} = useParams();
    console.log(id);*/
  return (
    <div className="Menu">
      <Navbar collapseOnSelect expand="lg" bg="info" variant="dark">
      <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
    <Nav.Link href="#features"> exemple</Nav.Link>
    <Link to="/livre">Livre</Link>
      <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link href="#deets">More deets</Nav.Link>
      
    </Nav>
  </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Menu;