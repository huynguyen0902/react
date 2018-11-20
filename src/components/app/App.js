import React, { Component } from 'react';
import './App.css';
import Hello from '../hello/Hello'
import Product from '../product/Product';
class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      edit : false
    };
  }
  render() {
    return (
      <div className="container">
        <Product edit = {this.state.edit} image="https://images-na.ssl-images-amazon.com/images/I/31hM0MspgOL.jpg">Iphone 7</Product>
        <Product edit = {this.state.edit} image="https://www.duchuymobile.com/images/detailed/11/samsung-galaxy-note-fe-cong-ty-duchuymobile-500x500.jpg">SamSung S9</Product>
      </div>
      
    );
  }
}

export default App;
