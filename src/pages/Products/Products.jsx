import axios from "axios"
import Card from 'react-bootstrap/Card';
// import CardGroup from 'react-bootstrap/CardGroup';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../AxiosConfig/AxiosConfig";
import Placeholder from 'react-bootstrap/Placeholder';
import Spinner from 'react-bootstrap/Spinner';
import { Audio } from 'react-loader-spinner'
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
            <Card style={{ width: "300px", marginLeft: "40px" }}>
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
