import React from 'react';

export default function Product(props) {
    return (
      <div>
          Product
          <img src={props.img} alt=''/>
          <h2>{props.name}</h2>
          <p>{props.price}</p>
      </div>
    )
}
