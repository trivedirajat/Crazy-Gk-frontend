import React from "react";
import {
  Container,
  Nav,
  Navbar,
} from "react-bootstrap";
import Logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import "../header/header.css";

function WelcomeHeader() {
  return (
    <>
      <Navbar expand="lg" className="nav-area">
        <Container fluid>
          <Navbar.Brand>
            <Link to="/">
              <img src={Logo} />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto nav-menus">
              <Nav.Link>
                <Link to="">Login</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="">Register</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="">Contact Us</Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    </>
  );
}

export default WelcomeHeader;
