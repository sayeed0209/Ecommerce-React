import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useProductContext } from "../context/products_context";
import { formatPrice } from "../utils/helper";
import PageHero from "../components/PageHero";
import styled from "styled-components";
import LoadingSpinner from "../components/LoadingSpinner";
import Error from "../components/Error";
import { API_URL } from "../utils/action.js";
import AddToCart from "../components/AddToCart";
const SingleProduct = () => {
  const {
    fetchSingleProducts,
    single_products_data: product,
    single_products_loading: loading,
    single_products_error: error,
  } = useProductContext();
  const { id } = useParams();

  useEffect(() => {
    fetchSingleProducts(`${API_URL}/${id}`);
    // eslint-disable-next-line
  }, [id]);

  if (loading) {
    return <LoadingSpinner />;
  }
  if (error) {
    return <Error />;
  }
  const {
    imgUrl,
    model,
    brand,
    price,
    cpu,
    ram,
    os,
    displayResolution,
    battery,
    primaryCamera,
    dimentions,
    weight,
  } = product;
  return (
    <Wrapper>
      <PageHero title={product.brand} product />
      <div className="container mt-5">
        <Link to="/" className="btn btn-warning text-white">
          Back To Home
        </Link>
        <div className="product-center">
          <img src={imgUrl} alt={model} />
          <section className="content">
            <h2>{brand}</h2>
            <h5 className="price">{formatPrice(price)}</h5>
            <p className="info">
              <span>Model: </span>
              {model}
            </p>
            <p className="info">
              <span>OS: </span>
              {os}
            </p>
            <p className="info">
              <span>CPU: </span>
              {cpu}
            </p>
            <p className="info">
              <span>RAM: </span>
              {ram}
            </p>
            <p className="info">
              <span>Display resolution: </span>
              {displayResolution}
            </p>
            <p className="info">
              <span>Battery: </span>
              {battery}
            </p>
            <p className="info">
              <span>Primary Camera: </span>
              {primaryCamera}
            </p>
            <p className="info">
              <span>Dimension: </span>
              {dimentions}
            </p>
            <p className="info">
              <span>Weight: </span>
              {weight} GM
            </p>
            <hr />
            <AddToCart product={product} />
          </section>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.main`
  .product-center {
    display: grid;
    gap: 2rem;
    margin-top: 2rem;
  }
  .price {
    color: #0dcaf0;
  }

  .info {
    text-transform: capitalize;
    width: 300px;
    display: grid;
    grid-template-columns: 125px 1fr;
    span {
      font-weight: 700;
    }
  }

  @media (min-width: 992px) {
    .product-center {
      grid-template-columns: 350px 1fr;
    }
    .price {
      font-size: 1.25rem;
    }
  }
`;
export default SingleProduct;
