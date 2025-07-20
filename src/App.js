import './App.css'
import Navbar from './components/Navbar.js'
import ProductList from './components/ProductList.js'
import Footer from './components/Footer.js'
import React, { useState } from 'react';
import AddItem from './components/AddItem.js';

function App() {
  const initialProductList = [
    {
      reviews: 'Your approach to capture moments is very nice. Thank you!',
      name: 'Rakhi Mandloi',
    },
    {
      reviews: 'You have done great Photography!',
      name: 'Virat Kohli',
    },
  ];

  const [productList, setProductList] = useState(initialProductList);
  const [TotalAmount, setTotalAmount] = useState(0);

  const removeItem = (index) => {
    let newProductList = [...productList];
    let newTotalAmount = TotalAmount;
    newTotalAmount -= (newProductList[index].quantity || 0) * (newProductList[index].price || 0);
    newProductList.splice(index, 1);
    setProductList(newProductList);
    setTotalAmount(newTotalAmount);
  }

  const addItem = (name, reviews) => {
    let newProductList = [...productList];
    newProductList.push({
      reviews: reviews,
      name: name,
      quantity: 0,
      price: 0
    });
    setProductList(newProductList);
  }

  return (
    <>
      <Navbar />
      <main className="container mt-5">
        <AddItem addItem={addItem} />
        <ProductList
          productList={productList}
          removeItem={removeItem}
        />
      </main>
      <Footer TotalAmount={TotalAmount} />
    </>
  );
}

export default App;
