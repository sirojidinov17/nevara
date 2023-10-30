import React from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function Filter({products}) {

const [choise, setChoise]=useState(null)
const [choisetwo, setChoisetwo]=useState(null)

const inf =useSelector((d)=>d.card)


const dispatch =useDispatch()

function Handle(d) {

  
setChoise(d)
console.log(choise);

inf && choise && inf.map((s)=>{
    if (s.id ==choise.id) {


        console.log("Bor ekan");

        console.log(choise.id);
       
    }
    else{
        console.log("Yo'q ekan");
        dispatch({
            type: "ADD",
            payload: {
              id: d.id,
              title: d.title,
              img:d.thumbnail,
              description: d.description,
              price: d.price
            }
          })
    }
});


inf.length == 0 &&       dispatch({
    type: "ADD",
    payload: {
      id: d.id,
      title: d.title,
      img:d.thumbnail,
      description: d.description,
      price: d.price
    }
  })


console.log(inf);

    // if (choise) {
    //     setChoisetwo(products)
    //     console.log(choisetwo);
    // }
    
    
    // else if (!choise){
    //     setChoise(products)
    //     console.log(choise);
    // }
}

  return (
    <div>
        <button onClick={()=>{
            Handle(products)
        }}>Add</button>
    </div>
  )
}
