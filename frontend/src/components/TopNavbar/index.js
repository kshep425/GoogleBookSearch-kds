import React from 'react';
import { Navbar, Nav } from "react-bootstrap";

const TopNavBar = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Keisha's Google Book Search</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#search" alt="Search">Search</Nav.Link>
            <Nav.Link href="#saved" alt="Saved">Saved</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default TopNavBar;