import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/actions';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <div className="product-card">
      <img src={product.imageUrl} alt={product.name} style={{ width: '150px' }} />
      <h2>{product.name}</h2>
      <p>Price: ${product.price}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
