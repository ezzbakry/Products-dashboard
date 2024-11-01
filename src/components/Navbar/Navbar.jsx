import { Component } from "react";
import Links from "../Links/Links";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, NavLink } from "react-router-dom";
import Offcanvas from 'react-bootstrap/Offcanvas';

import React from "react";



export default class Header extends Component {
  constructor() {
    super()
    // this.state={
    //     name:"ezz"
    // }
    // console.log("con called")

  }
  // componentDidMount(){
  //     console.log("cdm called")
  // }
  // componentDidUpdate(){

  //     console.log("update")
  // }

  // change=()=>{
  //     this.setState({name:(this.state.name=="ezz")?"ahmed":"ezz"})

  // }
  render() {
    // console.log("render called")
    return (
      <>

        {/* Loop through breakpoints to make the navbar responsive */}
        {['xl'].map((expand) => (
          <Navbar key={expand} bg="dark" expand={expand} variant="dark" className="w-100">
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
              <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />

              {/* Offcanvas component to show links in a drawer on small screens */}
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="end"
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
                      style={{
                        marginRight: "20px",
                        textDecoration: "none",
                        color: "white",
                      }}
                    >
                      Home
                    </NavLink>
                    <NavLink
                      to="/login"
                      style={{
                        marginRight: "20px",
                        textDecoration: "none",
                        color: "white",
                      }}
                    >
                      Login
                    </NavLink>
                    <NavLink
                      to="/register"
                      style={{
                        marginRight: "20px",
                        textDecoration: "none",
                        color: "white",
                      }}
                    >
                      Register
                    </NavLink>
                    <NavLink
                      to="/products"
                      style={{
                        marginRight: "20px",
                        textDecoration: "none",
                        color: "white",
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
}