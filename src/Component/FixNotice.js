import React from 'react'
import { useNavigate } from 'react-router-dom';


const FixNotice = () => {

  const navigate = useNavigate();
  const goToEvent = () => {
    navigate('./event');
  }

  return (
    <div onClick={goToEvent} className='fix-notice'>
      HAPPY BIRTHDAY COUPON 🎂
    </div>
  )
}

export default FixNotice
