import { Component } from "react"
import React from "react"
import mystyle from './Links.module.css'


export default  function Links(props){
    // let stylee={fontSize:"30px",textDecoration:"none"}
    return <>
    <a href="#" className={mystyle.test}> {props.name} </a>

    
    </>

}