import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logo from '../assets/img/magic-mobile.jpg';
const Navbar = () => {
  return (
    <Wrapper className="navbar navbar-light bg-light bg-gradient py-3 shadow-sm sticky-top">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="" />
        </Link>
        <div className="cart-container">
          <FaShoppingCart />
          <span className="cart-value">0</span>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  .cart-container {
    display: flex;
    align-items: center;
    position: relative;

    svg {
      height: 1.9rem;
      font-size: 25px;
      cursor: pointer;
    }
    .cart-value {
      position: absolute;
      top: -10px;
      right: -12px;
      background: #0dcaf0;
      width: 16px;
      height: 16px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      font-size: 0.75rem;
      color: #fff;
      padding: 12px;
    }
  }
`;

export default Navbar;
