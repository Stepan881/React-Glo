import React from 'react';
import styled from 'styled-components';

import logoImg from '../img/logo.svg';
import siginImg from '../img/sign.svg';

const NavBarStyled = styled.header`
  position: fixed;
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

const Login = styled.button`
  border-color: transparent;
  background-color: transparent;
  color: white;
  font-size: 16px;
`;

export const NavBar = () => (
  <NavBarStyled>
    <Logo>
      <ImgLogo src={logoImg} alt="Логотип" />
      <H1>MrDonald`s</H1>
    </Logo>
    <Login>
      <img src={siginImg} alt="Войти"/>
      <p>Войти</p>
    </Login>
  </NavBarStyled>
); 