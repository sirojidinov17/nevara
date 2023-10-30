import React, { useState} from 'react'
import { Link, useParams } from 'react-router-dom'
import Usefetch from '../../../components/hook/Hook'
import { GlassMagnifier, } from "react-image-magnifiers";
import './productsDetailes.css'
import { AiFillGoogleCircle, AiFillTwitterCircle, AiFillFacebook } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux';
import { INCREMENT } from '../../../store/Store';
import { DECREMENT } from '../../../store/Store';
import logo from '../../../Assets/img/new-products/6_1.jpg'
import { Col, Container, Row } from 'react-bootstrap';
import Hook from '../../../components/hook/Hook';

export const ProductsDetailes = () => {
    
  const  url=useSelector((state)=>state.url)
    const { id } = useParams(null)
    const { data,postOrder } = Hook(url+`products/`+id, "GET")
    const params = useParams(null)
    const dispatch = useDispatch()
   
    const [ingredient, setIngredient]=useState([])
    const [ingredients, setIngredients]=useState([])


    let a = [data.thumbnail]
    function Book(e) {
        if (ingredient) {
            setIngredient([...ingredient, e])
            dispatch({type:"ADD_ITEM", amount:ingredient})
        }

        
    }



    for (let i = 0; i < 4; i++) {
        
     data.images &&  console.log(data.images[i]);
    }



    // console.log(data.images.map((d)=>{
    //     return d
    // }));
 
    // data.products &&  data.products[0].images.map((d)=>{
    //     return <div>
    //        console.log(d);
    //     </div>
    //  })


    return (
        <Container fluid className='ProductsDetailes'>
            <Row>
                <Col xl={6} lg={6} md={12} className='ProductsDetailes-col'>
                    <div style={{ width: "442px", height: "513px" }} className='ProductsDetailes__img'>
                        <GlassMagnifier
                            imageSrc={a}
                            imageAlt="Data.img"
                            largeImageSrc={a}
                        />
<div  className='ProductsDetailes_images'>

 
{
    
    data.images && data.images.map((d)=>{
        return <div key={d}>
        <img src={d} alt="" />
    </div>
})
}
</div>



                    </div>
                </Col>
                <Col xl={6} lg={6} md={12} className='ProductsDetailes-col'>
                    <h3>{data.title}</h3>
                    <h5>{data.price}$</h5>
                    <p className='description'>{data.description}</p>
                    <h3>Discount: { data.discountPercentage}%</h3>
                    <h3>Brand: { data.brand}%</h3>
                    <div className="ProductsDetailes-col-btn">
                        <button><h5>+</h5></button>
                        <h5>{}</h5>
                        <button><h5>-</h5></button>
                    </div>
                    <button className='ProductsDetailes-col-addtocard'
                     onClick={() => {
                        Book(data.id)
                    }}
                    >ADD TO CARD</button>
                    <div className="ProductsDetailes-col-links">
                        <a href="mailto:"><AiFillGoogleCircle size={27} /></a>
                        <a href=""><AiFillTwitterCircle size={27} /></a>
                        <a href=""><AiFillFacebook size={27} /></a>
                    </div>

                </Col>
            </Row>
        </Container>
    )
}
