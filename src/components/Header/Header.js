import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css';

function Header() {
  return (
    <Navbar expand="lg" className="navbar-dark-lavender hheader">
      <Navbar.Brand href="#home" className='fw-bold custom-title'>FDMS</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto"> 
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#about">About us</Nav.Link>
          <Nav.Link href="#footer">Contact us</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
