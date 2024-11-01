import { Component, useState } from "react";
import Links from "../Links/Links";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, NavLink, useLocation } from "react-router-dom";
import Offcanvas from 'react-bootstrap/Offcanvas';

import React from "react";



export default function Header() {
  const [show, setShow] = useState(false);
  const location = useLocation();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleLinkClick = () => {
    handleClose();
  };
  return (
    <>

      {/* Loop through breakpoints to make the navbar responsive */}
      {['xl'].map((expand) => (
        <Navbar key={expand} bg="dark" expand={expand} variant="dark" >
          <Container fluid>
            <Navbar.Brand>
              <NavLink
                to="/"
                style={{
                  marginRight: "20px",
                  textDecoration: "none",
                  color: "white",
                }}
              >
                Dashboard
              </NavLink>
            </Navbar.Brand>

            {/* Navbar toggle button for small screens */}
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} onClick={handleShow} />

            {/* Offcanvas component to show links in a drawer on small screens */}
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              show={show}
              onHide={handleClose}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
              style={{width:"270px"}}
              className="offcanvas-dark"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Menu
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <NavLink
                    to="/"
                    onClick={handleLinkClick}
                    style={{
                      marginRight: "20px",
                      textDecoration: "none",
                      color: "white",
                      textDecoration:location.pathname === '/' ? 'underline' : 'none'
                    }}
                  >
                    Home
                  </NavLink>
                  <NavLink
                    to="/login"
                    onClick={handleLinkClick}
                    style={{
                      marginRight: "20px",
                      textDecoration: "none",
                      color: "white",
                      textDecoration:location.pathname === '/login' ? 'underline' : 'none'
                    }}
                  >
                    Login
                  </NavLink>
                  <NavLink
                    to="/register"
                    onClick={handleLinkClick}
                    style={{
                      marginRight: "20px",
                      textDecoration: "none",
                      color: "white",
                      textDecoration:location.pathname === '/register' ? 'underline' : 'none'
                      
                    }}
                  >
                    Register
                  </NavLink>
                  <NavLink
                    to="/products"
                    onClick={handleLinkClick}
                    style={{
                      marginRight: "20px",
                      textDecoration: "none",
                      color: "white",
                      textDecoration:location.pathname === '/products' ? 'underline' : 'none'
                    }}
                  >
                    Products
                  </NavLink>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );



}