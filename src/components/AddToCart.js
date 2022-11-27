import React, { useState, useEffect } from 'react';
import { useProductContext } from '../context/products_context';
const AddToCart = ({ product }) => {
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedStorage, setSelectedStorage] = useState('');
  const [colors, setColors] = useState([]);
  const [storage, setStorage] = useState([]);
  const { cartHandler } = useProductContext();
  useEffect(() => {
    if (product != null && product.options != null) {
      const { colors, storages } = product.options;
      setColors(colors);
      setStorage(storages);
      if (colors.length === 1) {
        setSelectedColor(colors[0].code);
      } else {
        setSelectedColor(colors[0].code);
      }
      if (storages.length === 1) {
        setSelectedStorage(storages[0].code);
      } else {
        setSelectedStorage(storages[0].code);
      }
    }
  }, [product]);

  return (
    <div>
      <div className="color d-flex align-items-center">
        <span className="me-2">Color :</span>
        {colors.map((color, idx) => {
          return (
            <div key={idx}>
              {color.name}
              {color.code}
            </div>
          );
        })}
      </div>
      <div className="storage d-flex mt-2 align-items-center">
        <span className="me-2">Space: </span>
        {storage.map((space, i) => {
          return (
            <div key={i} className="d-flex align-items-center">
              {space.name}
              {space.code}
            </div>
          );
        })}
      </div>
      <button
        className="btn btn-outline-success mt-3 mb-3"
        onClick={() => cartHandler(product.id, selectedColor, selectedStorage)}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default AddToCart;
