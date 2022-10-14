import React from "react";
import { Navbar, Nav, Button, Container, NavDropdown } from "react-bootstrap";
import Hero from "../../Components/Hero.";
// import WhatWeOffer from "../../Components/WhatWeOffer/index";
import './style.css';

export default function Landing() {
  return (
    <div>
      <Navbar className="header" expand="lg">
        <Container fluid>
          <Navbar.Brand href="/" className="logo">MedPharm</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className="header-link" href="#home">About</Nav.Link>
              <Nav.Link className="header-link" href="#link">Community</Nav.Link>
              <Nav.Link className="header-link" href="#link">Blog</Nav.Link>
              <NavDropdown title="Practitioners" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
              <Button className="custom-btn d-flex flex-column justify-content-center align-items-center" href="/get_started">Get Started</Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Hero />
      {/* <WhatWeOffer /> */}
    </div>
  );
}
