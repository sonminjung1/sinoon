import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faUser } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'

const NavBar = ({authenticate, setAuthenticate}) => {
  const menuList = [
    "Top",
    "Skirt",
    "Pants",
    "Dress",
    "Bag",
    "accessory",
    "swim"
  ];

  const navigate = useNavigate();
  // const goToLogin = () => {
  //   navigate('/login');
  // }

  const search = (event) => {
    if(event.key === "Enter") {
      let keyword = event.target.value;
      console.log("key word", keyword);
      navigate(`/?q=${keyword}`);
    }
  }
  return (
    <div className='nav-wrap'>
      <div className='nav-header'>
        {authenticate ? (
            <div className='login-title' onClick={() => setAuthenticate(false)}>
            <FontAwesomeIcon icon={faUser} />
            <span style={{cursor:"pointer"}}>Logout</span>
          </div>) :
          (<div className='login-title' onClick={() => navigate('/login') }>
        <span style={{cursor:"pointer"}}>Login</span>
      </div>)}
      </div>
      <div  style={{cursor:"pointer"}} onClick={() => navigate('/') } className='nav-logo'>
        <img width={150} src='https://sinoon.co.kr/web/upload/logo/logo.png' />
      </div>
      <div className='nav-menu-area'>
        <ul className='menu'>
          {menuList.map((menu, index) => (
            <li><a href='#' key={index}><menuList>{menu}</menuList></a></li>
          ))}
        </ul>
        <div className='search-box'>
        <input type='text' placeholder='Search' onKeyPress={search} />
      </div>  
      </div>
    </div>
  )
}

export default NavBar
