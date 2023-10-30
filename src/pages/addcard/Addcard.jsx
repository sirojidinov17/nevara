import React, { useState } from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import './addcard.css'
import Hook from '../../components/hook/Hook'
import { useLocation } from 'react-router-dom'

export default function Addcard() {
  const [card, setCard] = useState([])
  
  const date =useSelector((state)=>state)


  const {data} =Hook(date.url+`carts/`, "GET")

  const position =useLocation()


  console.log(date.card);

  if ( position.pathname =="/addcard") {
    document.title="Add_card"
  }



  return (
    <div className='AddCard'>

<table border="1px" align="center">
  <thead>
    <td>Remove</td>
    <td>Image</td>
    <td>Product</td>
    <td>Unit Price</td>
    <td>Add To Cart</td>
  </thead>
{
  date.card && date.card.map((d)=>{
    return <tbody key={d.id}>
      <td><span>X</span></td>
      <td><img src={d.img} alt="" /></td>
      <td><h6>{d.title}</h6></td>
      <td><b>${d.price}.00</b></td>
      <td><button>ADD to Card</button></td>
    </tbody>
  })
}
</table>
      
    </div>
  )
}

 
