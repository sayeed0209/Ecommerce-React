import React from 'react';
import { FaCircle, FaCheckCircle } from 'react-icons/fa';
const CartColors = ({ color, selectedColor, onClick }) => {
  return (
    <>
      <button className="btn me-2" onClick={onClick}>
        {selectedColor === color.code ? (
          <FaCheckCircle
            className="text-white"
            fill={color.name.toLowerCase()}
          />
        ) : (
          <FaCircle className="text-white" fill={color.name.toLowerCase()} />
        )}
      </button>
    </>
  );
};

export default CartColors;
