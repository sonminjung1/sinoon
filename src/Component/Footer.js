import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
const Footer = () => {
  return (
    <div className='footer-wrap'>
        <div className='footer-inner'>
            <div className='top'>
              <p>ABOUT</p>
              <p>STOCKIST</p>
              <p>CONTACT</p>
              <p>FAQ</p>
              <p>INSTAGRAM</p>
              <p>KAKAO</p>
            </div>
            <div className='bottom'>
              <p>AGREEMENT</p>
              <p>PRIVACY</p>
            </div>
            <img width={200} src='https://sinoon.co.kr/web/upload/logo/logo.png' />
        </div>
 
    </div>
  )
}

export default Footer
