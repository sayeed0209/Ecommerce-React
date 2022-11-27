import React from 'react';
import HeroPage from '../components/PageHero';
import ProductsList from '../components/ProductsList';
import Filters from '../components/Filters';
const Products = () => {
  return (
    <>
      <HeroPage />
      <section className="container">
        <Filters />
        <ProductsList />
      </section>
    </>
  );
};

export default Products;
