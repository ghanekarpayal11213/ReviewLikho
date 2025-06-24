import './App.css'
import {  Route} from 'react-router-dom';
import Navbar from './components/Navbar.js'
import ProductList from './components/ProductList.js'
import Footer from './components/Footer.js'
import React, { useState } from 'react';
import AddItem from './components/AddItem.js';
import HomePage from './components/Homepage.js';


function App() {
  var productList = [
    {
      reviews: 'Your approch to capture moments is very nice. Thank you!  ',
      name: 'Rakhi Mandloi',
    
    },
    {
      reviews: 'You have done great Photography!',
      name: 'Virat Kohli',
    
    },
  ]
  var [productList, setProductList] = useState(productList)
  let [TotalAmount, setTotalAmount] = useState(0)

  //const increamentQuantity = (index) => {
  //let newProductList = [...productList]
   // let newTotalAmount = TotalAmount
    //newProductList[index].quantity++
    //newTotalAmount += newProductList[index].price
    //setTotalAmount(newTotalAmount)
    //setProductList(newProductList)
  //}

  //const decreamentQuantity = (index) => {
    //let newProductList = [...productList]
    //let newTotalAmount = TotalAmount
    //if (newProductList[index].quantity > 0) {
      //newProductList[index].quantity--
      //newTotalAmount -= newProductList[index].price
    //}
    //setTotalAmount(newTotalAmount)
    //setProductList(newProductList)
  //}

  //const resetQuantity= () =>{
    //let newProductList = [...productList]
    //newProductList.map((products)=>{
    //products.quantity=0
     //})
  //setProductList(newProductList)
  //setTotalAmount(0)
//}

const removeItem =(index) =>{
  let newProductList = [...productList]
  let newTotalAmount = TotalAmount
  newTotalAmount -= 
  newProductList[index].quantity * newProductList[index].price;
  newProductList.splice(index,1);
  setProductList(newProductList)
  setTotalAmount(newTotalAmount)
}

const addItem = (name,reviews)=>{
  let newProductList = [...productList]
  newProductList.push({
  reviews:reviews,
  name:name,
  quantity:0
  })
  setProductList(newProductList)
}

  return (
    <>
      <Navbar />
      <main className="container mt-5">
        <AddItem addItem={addItem}/>
        <ProductList
          productList={productList}
          //increamentQuantity={increamentQuantity}
          //decreamentQuantity={decreamentQuantity}
          removeItem={removeItem}
        />
      </main>
      <Footer TotalAmount={TotalAmount} />
    </>
  )
}

const HomePagecon = () => {
  return (
        <Route exact path="/" component={HomePage} />
  );
};

export default App;
