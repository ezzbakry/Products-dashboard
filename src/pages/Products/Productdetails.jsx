import axios from "axios"
import React, { useEffect, useState } from "react"
import { useLoaderData, useParams, useRouteError } from "react-router-dom"
import Card from 'react-bootstrap/Card';
import axiosInstance from "../../AxiosConfig/AxiosConfig";



export default function Productdetails() {
    // const { id } = useParams()
    const product = useLoaderData()
    console.log(product)
    // const [product, setproduct] = useState([])
    // useEffect(() => {
    //     async function getproductbyID() {
    //         try {
    //             const res = await axiosInstance.get(`products/${id}`)
    //             setproduct(res.data)
    //         } catch (err) {
    //             console.log(err)
    //         }

    //     }
    //     getproductbyID()
    // })
    return <>
        <Card style={{ width: "400px", height: "500px", marginLeft: "40px" }}>
            <Card.Img variant="top" src={product.image} style={{width:"200px",margin:"auto"}} />
            <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>
                    {product.description}
                </Card.Text>
            </Card.Body>
            {/* <button className="btn btn-primary" onClick={()=>{
                nav(`/productdetails/${prd.id}`)

            }}> details</button> */}

        </Card>
    </>

}

export const loaders = async (arg) => {
    const res = await axiosInstance.get(`products/${arg.params.id}`)
    return res.data
}
export const ErrorBoundary=()=> {
    const error = useRouteError();
    console.error(error);
    return <div>{error.message}</div>;
  }