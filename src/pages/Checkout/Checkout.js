
import React, { Component } from 'react';
import './Checkout.css'

import Nav from '../../component/nav/nav.js'
// import './State.js'


export default class Checkout extends Component {


state = {
  name: this.props.product.name,
  img: this.props.product.img,
  price: this.props.product.price,
  old: this.props.product.old,
  description: this.props.product.description,
  star: this.props.product.star
}
cart =()=>{
  this.props.addCart(this.state)
  this.props.history.push('/cart')

}

  render() {
    // console.log(this.props)
    return (
      <div>
        <Nav/>
          <div className='Checkout'>
        
        <div className='Checkout-parent row align-items-center'>
                <div className='Checkout-container col '>

          <h2>{this.state.name}</h2>
          <div className="img"><img src={this.state.img} alt="" />
          </div>
          <p>{this.state.description}</p>
          <div className="prices">
              <span className='new'>{this.state.price}</span>
          <span className='old'>{this.state.old}</span>
          </div>
        
          <div className='star'>
            
          <span className='text-warning'>{this.state.star}</span>
          <span className='text-warning'>{this.state.star}</span>
          <span className='text-warning'>{this.state.star}</span>
          <span className='text-warning'>{this.state.star}</span>
          </div>
          <button>
            <a href='#' onClick={this.cart}>Add To Cart</a>
          </button>
        </div>
        </div>
  
        
        </div>
      </div>
    
    )
  }
}


