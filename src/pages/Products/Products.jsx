import axios from "axios"
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import React, { useEffect, useState } from "react"
import { PacmanLoader } from 'react-spinners'
import { useSelector, useDispatch } from "react-redux"
import { productaction } from "../../Store/slices/products";
import Productcard from "../../components/productscards/productcards";
import { useMemo, useCallback } from 'react';
import Pagination from 'react-bootstrap/Pagination'

export default function Products() {
  const load = useSelector((state) => state.load.load)
  const dispatch = useDispatch()
  const product = useSelector((state) => state.products.products)
  const [total, settotalprice] = useState(0)
  const [currentpage, setcurrentpage] = useState(1)
  const itemsofpage = 4
  const indexofLastproduct = currentpage * itemsofpage
  const indexofFirstproduct = indexofLastproduct - itemsofpage
  const currentProducts = product.slice(indexofFirstproduct, indexofLastproduct)
  const totalpages = Math.ceil(product.length / itemsofpage)
  console.log(currentProducts)
  const handlePagechange = (pagenumber) => {
    setcurrentpage(pagenumber)
  }
  useEffect(() => {
    dispatch(productaction())

  }, [dispatch])
  const memoiazedproducts = useMemo(() => {
    return currentProducts.map((prd) => (
      <Col key={prd.id}>
        <Productcard id={prd.id}
          title={prd.title}
          description={prd.description}
          image={prd.image}
          price={prd.price}
          adding={(price) => settotalprice((oldvalue) => oldvalue + price)} ></Productcard>
      </Col>
    ))
  }, [currentProducts])
  return <>
    <p style={{marginLeft:"10px"}}> Total receipt : {total}</p>
    {(load) ? <div className="d-flex justify-content-around">
      <PacmanLoader size={66} /></div> :
      <Row xs={1} sm={2} md={3} lg={4} className="g-4" justify-content-center>
        {memoiazedproducts}

      </Row>}
    <Pagination style={{margin:"30px",justifyContent:"center",alignItems:"center"}}>
      {Array.from({ length: totalpages }, (_, index) => (
        <Pagination.Item key={index + 1} active={index + 1 === currentpage} onClick={() =>handlePagechange(index + 1)}>
          {index + 1}
        </Pagination.Item>
      ))}
    </Pagination>
  </>
}

