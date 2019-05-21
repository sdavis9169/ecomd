import Product from '../Product/Product';
import React, { Component } from 'react';
import axios from 'axios';

export default class Dashboard extends Component {
    constructor(props){
        super(props);
        this.state = {
            inventoryList: []
          };
    }

    componentDidMount(){
      axios.get('/api/inventory')
        .then(res => {
          this.setState({
            inventoryList: res.data
          })
        })
    }

  render() {
    return (
      <div>
        {this.state.inventoryList.map((e) => (
            <Product id={e.id} name={e.name} price={e.price} img={e.image_url}/>
        ))}
        
      </div>
    )
  }
}
