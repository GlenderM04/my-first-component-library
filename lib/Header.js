// src/Header.js
"use client";

import React from 'react';
import styled from '@emotion/styled';
const HeaderContainer = styled.header`
  background: linear-gradient(135deg, #1e1e2f, #2a2a3a);
  color: #ffffff;
  padding: 20px;
  text-align: center;
  position: relative;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
  
  &:before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 300%;
    height: 300%;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    transform: translate(-50%, -50%);
    animation: pulse 5s infinite;
    z-index: 0;
  }

  h1 {
    position: relative;
    z-index: 1;
    font-size: 2.5em;
    animation: fadeIn 1.5s ease forwards;
    opacity: 0;
    animation-delay: 0.5s;
    animation-fill-mode: forwards;
  }

  @keyframes pulse {
    0% {
      transform: scale(0.8);
      opacity: 0.2;
    }
    50% {
      transform: scale(1);
      opacity: 0.6;
    }
    100% {
      transform: scale(0.8);
      opacity: 0.2;
    }
  }

  @keyframes fadeIn {
    to {
      opacity: 1;
    }
  }
`;
const Header = () => {
  return /*#__PURE__*/React.createElement(HeaderContainer, null, /*#__PURE__*/React.createElement("h1", null, "Bienvenido a mi Aplicaci\xF3n Futurista"));
};
export default Header;