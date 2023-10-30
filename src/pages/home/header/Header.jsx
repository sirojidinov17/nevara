import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './header.css'
import logo from '../../../Assets/img/slider/1.jpg'
import WOW from 'wowjs'

function Header() {
  function A() {
    new WOW.WOW().init()
  }
  return (
    <Container className='Header-head'>
      <Row>
        <Col xxl={12} xl={12} lg={12} className="Header-Col">

          <Col xxl={10} xl={10} lg={10} className="Header-Col-logo">
            <div className="Header-Col-logo-text">
              <h2 className='animate__animated animate__backInLeft '>
                EAMES LOUGE CHAIR <br />
                AND OTOMAN
              </h2>
              <p className=' animate__animated animate__backInRight'>
                Own an icon of modern design
              </p>
              <button className='animate__animated animate__bounceInDown'><h3>Shop Now</h3></button>
            </div>
            <div className="Header-Col-logo-img">
              <img src={logo} alt="logo" />
            </div>
          </Col>
        </Col>
      </Row>
    </Container>
  )
}

export default Header
