import React, { useContext } from "react"
import { Link, Outlet } from "react-router-dom"
import { colcontext } from "../../context/color"
import { fontcontext } from "../../context/fontcol"
export default function About() {
    const { col, setcol } = useContext(colcontext)
    const { fontcol, setfontcol } = useContext(fontcontext)

    return (<>

        <div style={{ backgroundColor: `${(col == "white") ? "" : "black"}`, height: "500px", color: `${(fontcol == "black") ? "" : "white"}` }}>
            <h1>{col}</h1>
            <button className="btn btn-primary" onClick={() => {
                setcol((col == "white") ? "black" : "white")
                setfontcol((fontcol == "black") ? "white" : "black")
            }}>change</button>
            <br />
            {/* <Link to="/about">values</Link>
            <Link to="/about/vision">vision</Link> */}
            <Outlet></Outlet>
        </div>
        {/* <Link to="/values">values</Link>
    <Link to="/vision">vision</Link> */}
    </>
    )

}