import axios from "axios"
import React, { useEffect, useState } from "react"
import { useLoaderData, useParams, useRouteError } from "react-router-dom"
import Card from 'react-bootstrap/Card';
import axiosInstance from "../../AxiosConfig/AxiosConfig";
import Productcard from "../../components/productscards/productcards";
import mystyle from "../Products/productdetails.module.css"




export default function Productdetails() {
    // const { id } = useParams()
    const product = useLoaderData()
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
        <div className={mystyle.test}>
            <Productcard id={product.id} title={product.title} description={product.description} image={product.image} price={product.price}></Productcard>

        </div>

    </>

}

export const loaders = async (arg) => {
    const res = await axiosInstance.get(`products/${arg.params.id}`)
    return res.data
}
export const ErrorBoundary = () => {
    const error = useRouteError();
    console.error(error);
    return <div>{error.message}</div>;
}
