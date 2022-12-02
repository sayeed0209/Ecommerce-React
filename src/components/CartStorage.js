import React from "react";
import { FaCircle, FaCheckCircle } from "react-icons/fa";
const CartStorage = ({ space, selectedStorage, onClick }) => {
  return (
    <>
      <button className="btn" onClick={onClick}>
        {selectedStorage === space.code
          ? space.name && <FaCheckCircle />
          : space.name && <FaCircle />}
        <span className="ms-2">{space.name}</span>
      </button>
    </>
  );
};

export default CartStorage;
