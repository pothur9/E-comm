import { useState } from 'react';
import axios from 'axios';

const Products = () => {
  const [productName, setProductName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState('');
  const [products, setProducts] = useState([]);
  
  const addProduct = async () => {
    try {
      const response = await axios.post('/api/admin/addProduct', {
        name: productName,
        description,
        price,
        image,
      });

      // Assuming response.data is the added product
      setProducts((prevProducts) => [...prevProducts, response.data]);

      // Reset individual states
      setProductName('');
      setDescription('');
      setPrice(0);
      setImage('');
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  return (
    <div>
      <h2>Add Product</h2>
      <input
        type="text"
        placeholder="Product Name"
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(parseFloat(e.target.value))}
      />
      <input
        type="text"
        placeholder="Image"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />

      <button onClick={addProduct}>Add Product</button>
    </div>
  );
};

export default Products;
