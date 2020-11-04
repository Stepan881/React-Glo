import React from 'react';
import styled from 'styled-components';

import logoImg from '../img/logo.svg';

const NavBarStyled = styled.header`
  position: relative;
  top: 0;
  left: 0;
  z-index: 999;
  height: 80px;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  background: #299b01;
  color: white;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
`;
const ImgLogo = styled.img`
  width: 50px;
`;
const H1 = styled.h1`
  font-size: 24px;
  margin-left: 15px;
`;

const Button = styled.button`
  border: 1px solid white;
  border-radius: 3px;
  color: white;
  background: inherit;
  font-size: 18px;
  margin-left: 15px;
  padding: 3px 15px;
  transition: 0.3s;
  cursor: pointer;
  
  &:hover {
    border: 1px solid red;
    color: red;
    transition: 0.3s;
  }
`;

export const NavBar = () => (
  <NavBarStyled>
    <Logo>
      <ImgLogo src={logoImg} alt="logo" />
      <H1>MrDonald`s</H1>
    </Logo>
    <Button>Войти</Button>
  </NavBarStyled>
);