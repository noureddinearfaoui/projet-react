import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

function Menu() {
  /* const {id} = useParams();
    console.log(id);*/

  return (
    <div className="Menu">
      <Navbar collapseOnSelect expand="lg" bg="info" variant="dark">
        <Navbar.Brand href="#home">BiBlio-ISAMM</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto"></Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Menu;
