import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Nav = () => {
  return (

    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#filters">Filters </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Laptop Brand" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Lenovo </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                HP
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">DELL</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Asus</NavDropdown.Item>

            </NavDropdown>

            <NavDropdown title="Price " id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">₹50,000</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                ₹60,000
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">₹70,000</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                ₹80,000
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  );


};

export default Navbar;
