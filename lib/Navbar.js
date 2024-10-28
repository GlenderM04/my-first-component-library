// src/Navbar.js
"use client";

import React from "react";
import styled from "@emotion/styled";
const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  background-color: #333;
  padding: 10px;
`;
const NavItem = styled.a`
  color: #fff;
  text-decoration: none;
  padding: 0 15px;
  &:hover {
    color: #ccc;
  }
`;
const Navbar = ({
  items
}) => {
  return /*#__PURE__*/React.createElement(NavbarContainer, null, items.map((item, index) => /*#__PURE__*/React.createElement(NavItem, {
    href: item.link,
    key: index
  }, item.label)));
};
export default Navbar;