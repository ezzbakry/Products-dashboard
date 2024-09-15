import React, { useEffect, useState } from "react";
export default function Usersfunctional() {
    const [users, setUsers] = useState([
        { id: 1, name: "ezz", isadmin: true }, { id: 2, name: "ahmed", isadmin: false }
    ])
    const [isauth, setauth] = useState(false)

    const handleChange=()=>{
        setauth(!isauth)
    }
    useEffect(()=>{
        console.log("eeee")
    })

    
    return <>
    {(isauth)?<ul>
            {users.map((user) => {
                if(!user.isadmin){
                    return <li key={user.id}>{user.name}</li>
                }
                
            })}

        </ul>:<p>you must login first</p>}

        <button className="btn btn-success" onClick={()=>{
            handleChange()
        }}>toogle</button>
        




    </>

}