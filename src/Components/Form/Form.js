import React, { Component } from 'react'

export default class Form extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            price:  '',
            image_url: '',
        }

        this.handleChangeImage = this.handleChangeImage.bind(this);
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangePrice = this.handleChangePrice.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
    }

    handleChangeName(e) {
        this.setState({
            name: e.target.value
        })
    }

    handleChangeImage(e){
        this.setState({
            image_url: e.target.value
        })
    }

    handleChangePrice(e){
        this.setState({
            price: e.target.value
        })
    }

    handleCancel(){
        this.setState({
            name: '',
            price:  '',
            image_url: '',
        })
    }

  render() {
    return (
      <div>
        Form
        <div className='input-container'>
            <input type='text' onChange={this.handleChangeImage}
            placeholder="Image URL" value={this.state.image_url}
            />
            <br />
            <input type='text' onChange={this.handleChangeName}
            placeholder="Product Name" value={this.state.name}
            />
            <br />
            <input type='text' onChange={this.handleChangePrice}
            placeholder="Product Price" value={this.state.price}
            />
        </div>

        <div className='button-container'>
            <button onClick={this.handleCancel}>Cancel</button>
            <button>Add to Inventory</button>
        </div>
      </div>
    )
  }
}
