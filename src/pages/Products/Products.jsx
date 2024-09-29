import axios from "axios"
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import { PacmanLoader } from 'react-spinners'
import { useSelector, useDispatch } from "react-redux"
import { productaction } from "../../Store/slices/products";
import Productcard from "../../components/productscards/productcards";
import { useMemo, useCallback } from 'react';

export default function Products() {
  const load = useSelector((state) => state.load.load)
  const dispatch = useDispatch()
  const product = useSelector((state) => state.products.products)
  const [total, settotalprice] = useState(0)

  useEffect(() => {
    dispatch(productaction())

  }, [])
  const memoiazedproducts = useMemo(() => {
    return product.map((prd) => (
      <Col key={prd.id}>
        <Productcard id={prd.id}
          title={prd.title}
          description={prd.description}
          image={prd.image}
          price={prd.price}
          adding={(price) => settotalprice((oldvalue) => oldvalue + price)} ></Productcard>
      </Col>
    ))
  }, [product])
  return <>
    Total receipt : {total}
    {(load) ? <div className="d-flex justify-content-around">
      <PacmanLoader size={66} /></div> :
      <Row xs={1} md={2} className="g-4">
        {memoiazedproducts}
      </Row>}
  </>
}
