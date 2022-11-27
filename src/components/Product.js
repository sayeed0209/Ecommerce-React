import React from 'react';
import { Link } from 'react-router-dom';
import { formatPrice } from '../utils/helper';
const Product = ({ id, brand, model, price, imgUrl }) => {
  return (
    <div className="col">
      <article className="h-100 shadow  mb-2 bg-body rounded ">
        <img src={imgUrl} className="card-img-top img-fluid p-5" alt={brand} />
        <div className="card-body d-flex justify-content-between align-items-start px-4 text-start">
          <div>
            <p className="card-title">
              <span></span>Brand : {brand}
            </p>
            <p className="card-title text-truncate">Model : {model}</p>
          </div>
          <p className="card-text">
            <span>{formatPrice(price)}</span>
          </p>
        </div>
        <Link
          to={`/${id}`}
          className="btn btn btn-success bd-opacity-75  mb-4 mt-3 ms-3"
        >
          See Details
        </Link>
      </article>
    </div>
  );
};

export default Product;
