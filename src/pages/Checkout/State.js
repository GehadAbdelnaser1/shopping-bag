// import mscend from "../../images/lipstick.jpg";
// import mthird from "../../images/eyeshadow.jpg";
// import mforth from "../../images/eye.avif";
import React, { Component } from 'react';
import { AiFillStar } from "react-icons/ai";
import Mfirst from '../../images/lipstick.jpg';
import Checkout from './Checkout.js'

export default class State extends Component {

  state ={
    product :[
      {id: 1 ,
        name: "Lorem" ,
        img: Mfirst,
        price: 400 ,
        old: 500 ,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." ,
        star:<AiFillStar/> },



      {id: 2 , name: "Lorem" ,img:Mfirst, price: 400 ,old: 500 ,description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." , star:<AiFillStar/> },
      {id: 3 , name: "Lorem" ,img:Mfirst, price: 400 ,old: 500 ,description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." , star:<AiFillStar/> },
      {id: 4 , name: "Lorem" ,img:Mfirst, price: 400 ,old: 500 ,description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." , star:<AiFillStar/> }
    ]
  }

  render() {
    return (
      <div>
        
        {this.state.product.map(product => (<Checkout key={product.id} product={product}/>))}
        
      </div>
    )
  }
}



