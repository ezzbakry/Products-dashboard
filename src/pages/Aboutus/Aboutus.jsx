import React from "react"
import { Link, Outlet } from "react-router-dom"
export default function About(){
    return <>
    

    <Link to="/about">values</Link>
    <Link to="/about/vision">vision</Link>

    <Outlet></Outlet>
    {/* <Link to="/values">values</Link>
    <Link to="/vision">vision</Link> */}
    

    </>

}