import React from 'react';
import { Link } from 'react-router-dom';

const PageHero = ({ title, product }) => {
  return (
    <section className="bg-success bg-opacity-25 breadcrumbs d-flex align-items-center">
      <div className="container d-flex justify-content-between align-items-center">
        <h3>
          <Link to="/" className="link-info">
            Home
          </Link>
          {product && (
            <Link to="/products" className="link-info">
              / Products /
            </Link>
          )}
          {title}
        </h3>
      </div>
    </section>
  );
};

export default PageHero;
