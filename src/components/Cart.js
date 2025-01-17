import React, { useState, useEffect } from 'react';
import './cart.css';

const CartPage = () => {
  const [cart, setCart] = useState([]);
  const currentUserId = window.localStorage.getItem('userId');
  const cartKey = `cart_${currentUserId}`;

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem(cartKey)) || [];
    setCart(savedCart);
  }, [cartKey]);

  const handleRemoveFromCart = (index) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    setCart(updatedCart);
    localStorage.setItem(cartKey, JSON.stringify(updatedCart));
  };

  const handleRemoveAll = () => {
    setCart([]);
    localStorage.removeItem(cartKey);
  };

  const handlePurchase = () => {
    if (cart.length > 0) {
      alert("Thank you for your purchase!");
      setCart([]);
      localStorage.removeItem(cartKey);
    } else {
      alert("Your cart is empty!");
    }
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => {
      const priceAsString = typeof item.price === 'string' ? item.price : '';
      const numericPrice = parseFloat(priceAsString.replace('$', '').replace(',', '')); // Ensure to handle commas too
      return total + (isNaN(numericPrice) ? 0 : numericPrice * item.quantity);
    }, 0).toFixed(2);
  };

  // const handleQuantityChange = (index, change) => {
  //   const newCart = [...cart];
  //   const newQuantity = newCart[index].quantity + change;

  //   if (newQuantity >= 1) { // Prevent quantity from going below 1
  //     newCart[index].quantity = newQuantity;
  //     setCart(newCart);
  //     localStorage.setItem(cartKey, JSON.stringify(newCart));
  //   }
  // };

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p className="empty-cart">Your cart is empty.</p>
      ) : (
        <div>
          <div className="cart-grid">
            {cart.map((item, index) => (
              <div key={index} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-item-image" />
                <div className="cart-item-info">
                  <h3>{item.name}</h3>
                  <p>Price: {item.price}</p>
                  {/* <p>Quantity: 
                    <button onClick={() => handleQuantityChange(index, -1)} disabled={item.quantity <= 1}>-</button>
                    {item.quantity}
                    <button onClick={() => handleQuantityChange(index, 1)}>+</button>
                  </p> */}
                  <button className="remove-button" onClick={() => handleRemoveFromCart(index)}>Remove</button>
                </div>
              </div>
            ))}
          </div>
          <div className="cart-total">
            <h3>Total Price: ${getTotalPrice()}</h3>
            <button className="purchase-button" onClick={handlePurchase}>Purchase</button>
            <button className="remove-all" onClick={handleRemoveAll}>Remove All Items</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
