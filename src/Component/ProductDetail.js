import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Container, Row, Col, Dropdown, Button } from 'react-bootstrap'

const ProductDetail = () => {

  let {id} = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const getProductDetail = async () => {
    let url = `https://my-json-server.typicode.com/sonminjung1/sinoon/products/${id}`;
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
    // <Container className='product-detail-wrap'>
    //   <Row>
    //     <Col className='product-detail-img'>
    //       <img src={product.img} />
    //     </Col>
    //     <Col className='product-detail-infoBox'>
    //       <div className='product-info'>{product.title}</div>
    //       <div className='product-info'>{product.price}</div>
    //       <div className='choice'>{product.choice? "Conscious" : ""}
    //       <Dropdown className='drop-down'>
    //         <Dropdown.Toggle variant="outline-dark" id="dropdown-basic">
    //           사이즈 선택
    //         </Dropdown.Toggle>
    //         <Dropdown.Menu>
    //           {product.size.map((item) => (
    //             <Dropdown.Item href='#/action-1'>{item}</Dropdown.Item>
    //           ))}
    //         </Dropdown.Menu>
    //       </Dropdown>
    //       <Button variant='dark' className='add-button'>선택</Button>
    //       </div>
    //     </Col>
    //   </Row>
    // </Container>

    <div className='product-detail-wrap'>
      <div className='product-detail-inner'>
        <div className='product-detail-img'>
          <img src={product.img} />
        </div>
        <div className='product-detail-info'>
          <div className='product-info-title'>{product.title}</div>
          <div className='product-info-price'><span>판매가</span>  ₩{product.price}</div>
          <div className='product-info-delivery'><span>배송비</span> ₩3000 (₩80,000 이상 구매 시 무료)</div>
          <Dropdown className='drop-down'>
            <Dropdown.Toggle variant="outline-dark" id="dropdown-basic">사이즈 선택</Dropdown.Toggle>
            <Dropdown.Menu className='drop-down-menu'> {product.size.map((item) => (
                <Dropdown.Item href='#/action-1'>{item}
                </Dropdown.Item>
                ))}
            </Dropdown.Menu>
          </Dropdown>
          <div className='add'>쇼핑백 추가</div>
          <div className='add'>바로 구매하기</div>
          <div className='add'>관심상품 추가</div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
