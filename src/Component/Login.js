import React from 'react'
import {Form, Button, Container} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


const Login = ({setAuthenticate}) => {
  const navigate = useNavigate();
  const loginUser = (event) => {
    event.preventDefault()
    console.log("로그인 유저");
    setAuthenticate(true);
    navigate('/')
  }

  return (
    <div className='login-area'>
      <form  onSubmit={loginUser}>
        <div className='title'>LOGIN.</div>
        <div className='user-id'>
          <label>E-mail </label>
          <input type='email' placeholder='Your E-mail' />
        </div>
        <div className='user-pw'>
          <label>PASSWORD</label>
          <input type='password' placeholder='Your password'/>
        </div>
        <button type='submit'>Login</button>
      </form>
      <div className='line'></div>
      <form>
        <div className='title'>GUEST ORDER.</div>
        <div className='user-id'>
          <label>주문자명 </label>
          <input type='text' placeholder="orderer's name" />
        </div>
        <div className='user-pw'>
          <label>주문번호</label>
          <input type='text' placeholder='orderer number'/>
        </div>
        <div className='user-pw'>
          <label>주문 비밀번호</label>
          <input type='text' placeholder='orderer password'/>
        </div>
        <button type='submit'>OK</button>
      </form>
      {/* <Form className='login-form' onSubmit={loginUser}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="danger" type="submit">
        Submit
        </Button>
      </Form> */}
    </div>
  )
}

export default Login
