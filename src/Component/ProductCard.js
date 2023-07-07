import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProductCard = ({item}) => {
  const navigate = useNavigate();
  const showDetail = () => {
    navigate(`/product/${item.id}`)
  }

  return (
    <div className='card' onClick={showDetail}>
      <img src={item.img} />
      <div className='item-info'>
        <div className='item-title'>{item.title}</div>
        <div className='item-price'>₩{item.price}</div>
        <span
        style={item.new === true ? {border : "1px solid #f7a67e"} : {border: "none"}}
        className='item-txt'>{item.new === true ? "New" : ""}
        </span>
      </div>
    </div>
  )
}

export default ProductCard
