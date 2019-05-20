import Product from '../Product/Product';
import React, { Component } from 'react';

export default class Dashboard extends Component {
    constructor(props){
        super(props);
        this.state = {
            inventoryList: [
              {
                name: "Steven",
                price: "50",
                image_url: "https://robohash.org/f",
                id: 1
              },
              {
                name: "Steven",
                price: "50",
                image_url: "http://robohash.org/a",
                id: 2
              },
              {
                name: "Steven",
                price: "50",
                image_url: "http://robohash.org/a",
                id: 3
              },
              
            ]
          };
    }

  render() {
    return (
      <div>
        Dashboard
        {this.state.inventoryList.map((e) => (
            <Product id={e.id} name={e.name} price={e.price} img={e.image_url}/>
        ))}
        
      </div>
    )
  }
}
