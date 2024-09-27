import axios from "axios"
import Card from 'react-bootstrap/Card';
// import CardGroup from 'react-bootstrap/CardGroup';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import { PacmanLoader } from 'react-spinners'
import { useSelector, useDispatch } from "react-redux"
import { productaction } from "../../Store/slices/products";
export default function Products() {
  const load = useSelector((state) => state.load.load)
  const nav = useNavigate()
  const dispatch = useDispatch()
  const product = useSelector((state) => state.products.products)

  useEffect(() => {
    dispatch(productaction())

  }, [])
  return <>
    {(load) ? <div className="d-flex justify-content-around">
      {/* <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner> */}
      <PacmanLoader size={66} /></div> :
      <Row xs={1} md={2} className="g-4">
        {product.map((prd) => (
          <Col>
            <Card style={{ width: "300px", justifyContent:"center",textAlign:"center",marginLeft: "40px" ,height:"100%",paddingTop:"50px"}}>
              <Card.Img variant="top" src={prd.image} style={{ width: "150px", margin: "auto" }} />
              <Card.Body>
                <Card.Title>{prd.title}</Card.Title>
                <Card.Text>
                  {prd.description}
                </Card.Text>
              </Card.Body>
              <button className="btn btn-primary" onClick={() => {
                nav(`/productdetails/${prd.id}`)

              }}> details </button>
            </Card>
          </Col>
        ))}
      </Row>}
  </>
}
