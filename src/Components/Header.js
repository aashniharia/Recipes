import React from "react";
import axios from "axios";
import { Container, Navbar, Nav } from "react-bootstrap";

function Header() {

  return (
    <Navbar bg="dark" variant="dark" sticky="top" expand="lg" collapseOnSelect>
      <Container>
        <Navbar.Brand href="/categories">Recipes For All</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="nav-link" href="/categories">
              Home
            </Nav.Link>
            <Nav.Link href="/categories/Dessert"> Chef's Special: Dessert</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
