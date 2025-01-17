import React, { useState, useEffect } from 'react';
import './product.css'; 
import { useNavigate } from 'react-router-dom';

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const [addedToCart, setAddedToCart] = useState({}); // Tracks which products are added to cart
  const navigate = useNavigate();

  // Fetch products from db.json
  useEffect(() => {
    fetch('http://localhost:1000/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  // Get the current user's identifier (ID or name)
  const currentUserId = window.localStorage.getItem('userId'); // Example: Change this to whatever key you use

  // Function to add product to cart
  const handleAddToCart = (product) => {
    const cartKey = `cart_${currentUserId}`;
    const cart = JSON.parse(localStorage.getItem(cartKey)) || [];

    // Check if the product already exists in the cart
    const existingProductIndex = cart.findIndex(item => item.id === product.id);

    if (existingProductIndex >= 0) {
      alert("Product is already in the cart.");
      return;
    }

    // Add new product with quantity 1
    cart.push({ ...product, quantity: 1 });
    localStorage.setItem(cartKey, JSON.stringify(cart));
    alert("Item Added to Cart");

    // Mark the product as added to cart
    setAddedToCart((prevState) => ({
      ...prevState,
      [product.id]: true,
    }));
  };

  // Redirect to cart page
  const goToCart = () => {
    navigate('/cart');
  };

  return (
    <div className="product-page">
      <section className="products">
        <h2>Our Services</h2>
        <div className="product-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} className="product-image" />
              <div className="product-info">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-price">{product.price}</p>
                <p className="product-description">{product.description}</p>
                <button
                  className="buy-now"
                  onClick={() => handleAddToCart(product)}
                  disabled={addedToCart[product.id]}
                >
                  {addedToCart[product.id] ? "Added" : "Add to Cart"}
                </button>
              </div>
            </div>
          ))}
        </div>
        <button className="view-cart-btn" onClick={goToCart}>View Cart</button>
      </section>
    </div>
  );
};

export default ProductPage;
