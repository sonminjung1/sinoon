import React from 'react'
import { useEffect, useState } from 'react'
import ProductCard from './ProductCard';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSearchParams } from 'react-router-dom';
import Slider from './Slider';
import Footer from './Footer';

const ProductAll = () => {
  const [productList, setProductList] = useState([]);
  
  // 검색기능
  // useSearchParams() 함수
  // URL 쿼리값을 가져오기 위해서 사용할 수 있는 리액트 훅
  const [query, setQuery] = useSearchParams();
  const getProduct = async () => {
    let searchQuery = query.get('q') || '';
    console.log('쿼리값은?', searchQuery)
    let url = `https://my-json-server.typicode.com/sonminjung1/sinoon/products?q=${searchQuery}`;
    console.log(url);
    let response = await fetch(url);
    let data = await response.json();
    //console.log(data)
    setProductList(data);
  }
  useEffect(() => {
    getProduct();
  },[query]);
  return (
    <div>
      <Slider />
      <Container>
        <Row>
          {productList.map((item) => (
            <Col md={3} sm={12} key={item.id}>
              <ProductCard item={item} />
            </Col>
          ))}
        </Row>
      </Container>
      <Footer />
    </div>
  )
}
export default ProductAll
