import React from 'react';
import styled from 'styled-components';

import DBMenu from './DBMenu';
import {ListItem} from './ListItem';
import {Banner} from "./Banner";

const MenuStyled = styled.main`
  background-color: #ccc;
  margin-top: 80px;
`;

const SectionStyled = styled.section`
  padding: 30px;
`;

export const Menu = ({setOpenItem}) => (
  <MenuStyled>
    <Banner />
    <SectionStyled>
      <h2>Бургеры</h2>
      <ListItem
        itemList={DBMenu.burger}
        setOpenItem={setOpenItem}
      />
    </SectionStyled>

    <SectionStyled>
      <h2>Закуски / Напитки</h2>
      <ListItem
        itemList={DBMenu.other}
        setOpenItem={setOpenItem}
      />
    </SectionStyled>
  </MenuStyled>
);
