import React, { Component } from 'react';
import CardList from './CardList';
import Scroll from './Scroll';
import './Main.css'
import SearchBox from './SearchBox';

class Main extends Component {

  constructor (){
    super()
    this.state =  {
      products: [],
      searchField: ''

    }

}

componentDidMount(){
this.setState({products:this.props.products});
}

onSearchChange = (event) =>{
    this.setState({searchField: event.target.value})    
    console.log(event.target.value);
  
}


  render() {

   
    const {products,searchField} = this.state;
    const filteredProducts = products.filter(products =>{
        return products.name.toLowerCase().includes(searchField.toLowerCase())
    })   
    console.log(filteredProducts);
    if(products.length ===0){
        return <h1>Loading</h1>
    }
    else{
    
    return (
      <div id="content">
        <div class="myRow">
        <div class = 'addProduct'>
          
        <h3 class  ='common form-group mb-2'>Add Product</h3>
        
        </div>
        <form class = 'form-inline myForm' onSubmit={(event) => {
          event.preventDefault()
          const name = this.productName.value
          const price = window.web3.utils.toWei(this.productPrice.value.toString(), 'Ether')
          this.props.createProduct(name, price)
        }}>

          <div className="common field inputName">
          
            <input
              id="productName"
              type="text"
              ref={(input) => { this.productName = input }}
              className="form-control"
              placeholder="Product Name"
              required />
              </div>
          
          <div className="common field inputPrice">
          
            <input
              id="productPrice"
              type="text"
              ref={(input) => { this.productPrice = input }}
              className="form-control"
              placeholder="Product Price"
              required />
              </div>
          
          <button type="submit" className="common theButton btn btn-success">Add Product</button>
          <div class = 'searchBox'>
          <SearchBox searchChange = {this.onSearchChange}/>
          </div>
        </form>
        </div>
        <p>&nbsp;</p>
       
        <div class="cardlist">
        <Scroll>
            <CardList 
            products = {filteredProducts}
            purchaseProduct = {this.props.purchaseProduct}
            />
        </Scroll>
        </div>
      </div>
    );
  }
}
}

export default Main;
