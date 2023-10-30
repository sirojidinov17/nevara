import React from 'react'
import { TextField } from '@material-ui/core'
import {AiFillGoogleCircle, AiFillTwitterCircle, AiFillFacebook} from 'react-icons/ai'
import { Col, Container, Row } from 'react-bootstrap'
import './login.css'

function Login() {
const activ=window.location
  if (activ.pathname=="/login") {
    document.title="Log in"
  }

  
  return (
    <Container className='Login'>
      <Row className='Login__row'>
        <Col className='Login__col'>
          <form noValidate autoComplete="off">
            <h1>NEWSLETTER</h1>
            <div className='Login__col-item'>
              <TextField id="standard-basic" required type="text" label="Name" />
              <TextField id="standard-basic" required label="Surname" />
            </div>
            <div>
              <TextField id="standard-basic" required type='tel' label="Number" />
              <TextField id="standard-basic" required type='email' label="Email" />
            </div>
          </form>
          <div className="Login__icon">
            <a href="mailto:"><AiFillGoogleCircle size={27} /></a>
            <a href=""><AiFillTwitterCircle size={27} /></a>
            <a href=""><AiFillFacebook size={27} /></a>
          </div>
          <div className="Login__btn">
            <button>Subscribe</button>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Login
