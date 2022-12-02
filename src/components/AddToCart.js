import React, { useState, useEffect } from "react";
import { useProductContext } from "../context/products_context";
import CartColors from "./CartColors";
import CartStorage from "./CartStorage";
const AddToCart = ({ product }) => {
  const [selectedColorCode, setSelectedColorCode] = useState(null);
  const [selectedStorageCode, setSelectedStorageCode] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedStorage, setSelectedStorage] = useState(null);
  const [colors, setColors] = useState([]);
  const [storage, setStorage] = useState([]);
  const { cartHandler } = useProductContext();
  let { model, brand, imgUrl, price, weight, cpu, ram } = product;
  let finalObj = { model, brand, imgUrl, price, weight, cpu, ram };
  useEffect(() => {
    if (product != null && product.options != null) {
      const { colors, storages } = product.options;
      setColors(colors);
      setStorage(storages);
      if (colors.length === 1) {
        setSelectedColorCode(colors[0].code);
        setSelectedColor(colors[0].name);
      } else {
        setSelectedColorCode(colors[0].code);
        setSelectedColor(colors[0].name);
      }
      if (storages.length === 1) {
        setSelectedStorageCode(storages[0].code);
        setSelectedStorage(storages[0].name);
      } else {
        setSelectedStorageCode(storages[0].code);
        setSelectedStorage(storages[0].name);
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
              <CartColors
                color={color}
                selectedColor={selectedColorCode}
                onClick={() => {
                  if (colors.length > 1 && color.code !== selectedColorCode.code) {
                    setSelectedColorCode(color.code);
                    setSelectedColor(color.name);
                  }
                }}
              />
            </div>
          );
        })}
      </div>
      <div className="storage d-flex mt-2 align-items-center">
        <span className="me-2">Space: </span>
        {storage.map((space, i) => {
          return (
            <div key={i} className="d-flex align-items-center">
              <CartStorage
                space={space}
                selectedStorage={selectedStorageCode}
                name={space.name}
                onClick={() => {
                  if (storage.length > 1 && space.code !== selectedStorageCode) {
                    setSelectedStorageCode(space.code);
                    setSelectedStorage(space.name);
                  }
                }}
              />
            </div>
          );
        })}
      </div>
      <button
        className="btn btn-outline-success mt-3 mb-3"
        onClick={() =>
          cartHandler(
            product.id,
            selectedColorCode,
            selectedStorageCode,
            finalObj,
            selectedColor,
            selectedStorage,
          )
        }
      >
        Add to Cart
      </button>
    </div>
  );
};

export default AddToCart;
