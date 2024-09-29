import Card from 'react-bootstrap/Card';
import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useNavigate } from "react-router-dom";




export default function Productcard({ id, title, description, image, price, adding }) {
    const nav = useNavigate()

    return <>
        <Card style={{ width: "300px", justifyContent: "center", textAlign: "center", marginLeft: "40px", height: "100%", paddingTop: "50px" }}>
            <Card.Img variant="top" src={image} style={{ width: "150px", margin: "auto" }} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {description}
                </Card.Text>
                <Card.Text>
                    {`price  : ${price}$`}
                </Card.Text>
            </Card.Body>
            <div style={{ display: "flex"}} >
                <button style={{width:"100%"}} className="btn btn-primary" onClick={() => {
                    nav(`/productdetails/${id}`)
                }}> details </button>
                <button style={{width:"100%",marginLeft:"20px"}} className="btn btn-primary" onClick={() => {
                    adding(price)
                }}> Add to cart </button>

            </div>

        </Card>
    </>


}