import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

const NavBar = (props) => {
  const handleLogout = () => {
    props.logOut();
  }
   
  const location = useLocation();

  return (
    <Navbar bg="light" expand="lg">
      <Container className="mainNav">
        <Navbar.Brand as={Link} to="#" className="brand_info">
          <img
            src={`${process.env.PUBLIC_URL}/images/logo.png`}
            alt="Logo"
            width="40"
            height="40"
            className="d-inline-block align-top"
          />{" "}
          <span>My Dropbox App</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {" "}
            {/* 'ms-auto' pushes the Nav items to the right */}
            <Nav.Link
              as={Link}
              to="/"
              className={`navlk navlk_1 ${
                location.pathname === "/" ? "active" : ""
              }`}
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/drive"
              className={`navlk ${
                location.pathname === "/drive" ? "active" : ""
              }`}
            >
              Drive
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/profile"
              className={`navlk ${
                location.pathname === "/profile" ? "active" : ""
              }`}
            >
              Profile
            </Nav.Link>
            <Nav.Link
              onClick={handleLogout}
              className={`navlk`}
            >
              Sign Out{" "}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
