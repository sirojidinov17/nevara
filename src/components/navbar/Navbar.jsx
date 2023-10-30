import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import App from '../../App'
import { Col, Container, Row } from 'react-bootstrap'
import './navbar.css'
import logo from '../../Assets/img/logo/logo.png'
import { AiOutlineMenu, AiOutlineSearch, AiOutlineSetting } from 'react-icons/ai'
import { AiOutlineLogin } from 'react-icons/ai'
import { BsBagCheck } from 'react-icons/bs'
import { useSelector } from 'react-redux'
import Hook from '../hook/Hook'

function Navbar() {
  const [toggle, setToggle] = useState(false)
  const [text, setText] = useState(false)



  const date = useSelector((state) => state)



  // const activ=window.location
  // if (activ.pathname =="/") {
  //   console.log("Home");
  // }

  function scrollFunction() {
    if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
      document.querySelector('.container-fluid').style.boxShadow = '1px 1px 20px grey'
    }
    else {
      document.querySelector('.container-fluid').style.boxShadow = 'none'

    }
  } window.onscroll = function () { scrollFunction() };



  const Links = () => (
    <>
      <Link to='/'>
        <h3>
          Home
        </h3>
      </Link>
      <Link>
        <h3>
          Furniture
        </h3>
      </Link>
      <Link>
        <h3>
          Decor
        </h3>
      </Link>
      <Link>
        <h3>
          Pages
        </h3>
      </Link>
      <Link>
        <h3>
          About
        </h3>
      </Link>
    </>
  )

  function handle() {
    if (toggle) {
      setToggle(false)
    }
    else {
      setToggle(true)
    }
  }

  function inputForm() {
    if (text) {
      setText(false)
    }
    else {
      setText(true)
    }
  }




let a=document.getElementsByTagName("meta")

for (let i = 0; i < a.length; i++) {
    if (a[i].name=="description") {
    a[i].content=`Hello world`
  }
  
}

  return (
    <Container fluid>

      <Row>
        <Col xxl={4} xl={4} lg={4} md={4} sm={12} xs={12}>
          <div className="logo">
            <a href={<App />}>
              <img src={logo} alt="logo" />
            </a>
          </div>
        </Col>
        <Col xxl={8} xl={8} lg={8} md={8} sm={12} xs={12}>
          <Row>
            <Col lg={8} md={8} sm={5} xs={5}>
              <div className='Navbar-container'>
                <div className="Navbar-links">
                  <Links />
                </div>
                <div className="Navbar-menu">
                  <AiOutlineMenu className='Icon' onClick={handle} size={27} />
                  {toggle &&
                    <div className="Navbar-menu-links">
                      <Links />
                    </div>
                  }
                </div>

              </div>
            </Col>
            <Col lg={4} md={4} sm={7} xs={7}>
              <div className="Navbar-icon">
                <div className="Navbar-AiOutlineSearch">
                  <AiOutlineSearch className='Icon' size={23} onClick={inputForm} />
                  {text &&
                    <input type="text" placeholder='Search' />
                  }
                </div>
                <div className="Navbar-BsBagCheck">
                  <Link to='/addcard'><BsBagCheck className='Icon' size={23} />{ date.card.length >0 ?  <span>{date.card.length}</span>:<noscript></noscript>  }</Link>
                </div>
                <div className="Navbar-AiOutlineSetting">
                  <Link> <AiOutlineSetting className='Icon' size={23} /></Link> 
                </div>
                <div className="Navbar-AiOutlineSetting">
                  <Link to="/login"> <AiOutlineLogin className='AiOutlineLogin' size={23} /></Link>
                </div>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}

export default Navbar
