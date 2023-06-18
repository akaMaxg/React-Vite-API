import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavBar = () => {
  return (
    <NavContainer>
      <HomeLink to="/">Home</HomeLink>
    </NavContainer>
  );
};

export default NavBar;

const NavContainer = styled.nav`
  display: flex;
  font-family: arial;
  font-weight: 400;
  font-size: 16px;
  padding: 20px;
  width: 100%;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  background-color: #333;
  position: fixed;
  top: 0;
  left: 0;
`;

const HomeLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: bold;
`;
