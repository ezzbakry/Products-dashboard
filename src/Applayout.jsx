import React from 'react'
import Header from './components/Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function AppLayout() {
    const lang = useSelector((state) => state.language.language)
    const bg = useSelector((state) => state.bg.bg)
    const fontcol = useSelector((state) => state.fontcol.fontcol)


    return (
        <>
            <div dir={`${(lang == 'en') ? 'ltr' : 'rtl'}`} style={{ backgroundColor: `${(bg == "white") ? "" : "black"}`, color: `${(fontcol == "black") ? "" : "white"}`, height: "500px" }}>
                <Header></Header>
                <Outlet></Outlet>
            </div>
        </>
    )
}