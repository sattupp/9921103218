import React, { useState, useEffect } from 'react';
import axios from 'axios'; // if using axios for HTTP requests

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch top N products here
    // Example using Axios (replace with your own fetching logic)
    axios.get('https://api.')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('Error fetching top products: ', error);
      });
  }, []);

  return (
    <div className="App">
      <h1>Top Products</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            {product.name} - ${product.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
