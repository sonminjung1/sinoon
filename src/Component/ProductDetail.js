import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Container, Row, Col, Dropdown, Button } from 'react-bootstrap'

const ProductDetail = () => {

  let {id} = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const getProductDetail = async () => {
    let url = `https://my-json-server.typicode.com/sonminjung1/reacthnm/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    setLoading(false);
    console.log(data);
    setProduct(data);
  }
  useEffect(() => {
    getProductDetail();
  }, []);
  // 로딩중일때 ..
  if(loading || product == null) return <h1></h1>


  return (
    <Container>
      <Row>
        <Col className='product-detail-img'>
          <img src={product.img} />
        </Col>
        <Col>
          <div className='product-info'>{product.title}</div>
          <div className='product-info'>{product.price}</div>
          <div className='choice'>{product.choice? "Conscious" : ""}
          <Dropdown className='drop-down'>
            <Dropdown.Toggle variant="outline-dark" id="dropdown-basic">
              사이즈 선택
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {product.size.map((item) => (
                <Dropdown.Item href='#/action-1'>{item}</Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <Button variant='dark' className='add-button'>선택</Button>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default ProductDetail
