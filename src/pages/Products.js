import React from 'react';
import HeroPage from '../components/PageHero';
import ProductsList from '../components/ProductsList';
const Products = () => {
  return (
    <>
      <HeroPage />
      <section className="container">
        <ProductsList />
      </section>
    </>
  );
};

export default Products;
