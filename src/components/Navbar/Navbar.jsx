import { Component } from "react";
import Links from "../Links/Links";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, NavLink } from "react-router-dom";
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

        <Navbar bg="dark" data-bs-theme="dark">
          <Container>
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="me-auto">
              <NavLink style={{marginRight:"20px",textDecoration:"none",color:"white"}} to="/">Home</NavLink>
              <NavLink style={{marginRight:"20px",textDecoration:"none",color:"white"}} to="/about">About</NavLink>
              <NavLink style={{marginRight:"20px",textDecoration:"none",color:"white"}} to="/login">Login</NavLink>
              <NavLink style={{marginRight:"20px",textDecoration:"none",color:"white"}}  to="/contact">Contact</NavLink>
              <NavLink style={{marginRight:"20px",textDecoration:"none",color:"white"}}  to="/products">Products</NavLink>

            </Nav>
          </Container>
        </Navbar>
        <br />
        

        {/* <div>hello Nav</div>
        <Links name="Home"></Links>
        <Links name="Login"></Links>

        <Links name="Blog"></Links>
        <br></br>
        <img style={{width:"500px",height:"500px"}} src='/chicago.jpg'></img> */}




        {/* <div>hello {this.state.name}</div>
        <button onClick={this.change}>change</button> */}


      </>
    );


  }
}