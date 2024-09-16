import { useNavigate } from "react-router-dom"
import React from "react"
import { useSelector } from "react-redux"
// import language from "../../Store/slices/language"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


export default function Contact() {
    const nav = useNavigate()
    const handlenavigation = () => {
        nav('/about')

    }
    const lan = useSelector((state) => state.language.language)
    console.log(lan)
    return <>
        <p>Contact lang is {lan}</p>
        <button className="btn btn-primary" onClick={() => {
            handlenavigation()
        }}> go to about</button>
        
    </>


}