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

const Navbar = ({ items }) => {
  return (
    <NavbarContainer>
      {items.map((item, index) => (
        <NavItem href={item.link} key={index}>
          {item.label}
        </NavItem>
      ))}
    </NavbarContainer>
  );
};

export default Navbar;
