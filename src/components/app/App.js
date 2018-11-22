import React, { Component } from 'react';
import './App.css';
import Product from '../product/Product';
import Header from '../header/Header';
import ContainerContent from '../containerContent/ContainerContent';
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      products : [
        {
          name: "iphone 7",
          image: "https://images-na.ssl-images-amazon.com/images/I/31hM0MspgOL.jpg"
        },
        {
          name: "samsung",
          image: "https://www.duchuymobile.com/images/detailed/11/samsung-galaxy-note-fe-cong-ty-duchuymobile-500x500.jpg"
        }
      ]
    };
  }
  Show_Product = () =>{
    const products = this.state.products.map((item, index) => 
      <Product key={index} image={item.image}>{item.name}</Product>
    );
    return products;
  }
  render() {
    return (
      <div>
        <Header></Header>
        <ContainerContent></ContainerContent>
      </div>
      
    );
  }
}

export default App;
