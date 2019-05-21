import React from 'react';
import './Product.css'

export default function Product(props) {
    return (
      <div className="dashboard">
          <img src={props.img} alt=''
          className='image'/>
          <h2>Name: {props.name}</h2>
          <h2>Price: {props.price}</h2>
      </div>
    )
}
