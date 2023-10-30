import React from 'react'
import { Container, Row, Col, Button, Pagination } from 'react-bootstrap'
import './products.css'
import Card from 'react-bootstrap/Card';
import { GrView } from 'react-icons/gr'
import ListGroup from 'react-bootstrap/ListGroup';
import Image from '../../../Assets/img/new-products/6_1.jpg';
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Hook from '../../../components/hook/Hook';


function Products() {

  const url = useSelector((state) => state)

  const dispatch = useDispatch()



  const [skip, setSkip] = useState(10)
  const { data, isPending } = Hook(url.url + `products?limit=12&skip=${skip}`, "GET")
  const [currentPage, setCurrentPage] = useState(1); // Joriy sahifa raqami


const [filter, setFilter]=useState()

  const totalPages = data.total / 10 - 1; // Umumiy sahifalar soni

  const handlePageChange = (page) => {
    setCurrentPage(page);
    setSkip(page * 10)
  };



  console.log(url);


function Handle(d) {
  dispatch({
    type: "ADD",
    payload: {
      id: d.id,
      title: d.title,
      img:d.thumbnail,
      description: d.description,
      price: d.price,
      saved:true
    }
  })




  console.log(url.card.length);
  url.card && url.card.map((s)=>{
    if (s.id==filter) {
      
      console.log("bor");
    }


    else if(s.id !== filter){
      console.log("yo'q");
    }
  })
  
}
  
  let dd = document.getElementsByTagName("link")

  // console.log(dd);
// console.log(data);

  return (
    <Container>
      <Row>
        <Col xs={12} className="Products">
          <h3 className="Products__header-text">Top new in this week</h3>
        </Col>
      </Row>
      <Row>
        <Col xs={12} className='NEW__PRODUCTS'>
          <div></div>
          <h1>NEW PRODUCTS</h1>
          <div></div>
        </Col>
      </Row>
      <Container className='Products__cotainer' >

        <Row>
          <Col className='Products__card' xs={12}>


            {
              data.products &&
              data.products.map((d) => {
                return <Card className='Products__card-item' style={{ width: '15rem', height: "25rem" }} key={d.id}>
                  <Card.Img className='Products__card-item-img' src={d.thumbnail} />
                  <Card.Body>
                    <Card.Title>
                      <h5>{d.title}</h5>
                    </Card.Title>
                    <Card.Text><b>{d.price}$</b></Card.Text>
                  </Card.Body>
                  <div className="Products__card-item-link">
                    <Link to={`/d/${d.id}`}   >Add Card</Link>
                  </div>
                </Card>
              })
            }

          </Col>
          <Col xs={12} className='Products_Pagination'>
            <Pagination>
              <Pagination.Prev
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
              />
              {Array.from({ length: totalPages }, (_, index) => (
                <Pagination.Item
                  key={index + 1}
                  active={index + 1 === currentPage}
                  onClick={() => handlePageChange(index + 1)}
                >
                  {index + 1}
                </Pagination.Item>
              ))}
              <Pagination.Next
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
              />
            </Pagination>
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Products
