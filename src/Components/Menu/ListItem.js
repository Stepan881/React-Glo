import React from 'react';
import styled from 'styled-components';

import {convertToPrice} from '../Functions/secondaryFunction';

const List = styled.ul`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const Item = styled.li`
  position: relative;
  width: 400px;
  height: 155px;
  background-image: ${({img}) => `url(${img})`};
  background-position: center;
  background-size: cover;
  margin: 30px 30px 0 0;
  padding: 15px;
  color: white;
  z-index: 1;
  font-size: 30px;
  transition: 0.3s;

  &:after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: black;
    opacity: 0.3;
    z-index: -1;
  }

  &:hover {
    transition: 0.3s;
    cursor: pointer;
    box-shadow: inset 0 0 50px 30px rgba(0, 0, 0, 1);
    &:after {
      opacity: 0;
    }
  }
`;

export const ListItem = ({ itemList, setOpenItem }) => (
  <List>
    {itemList.map(item => (
      <Item
        key={item.id}
        img={item.img}
        onClick={ () => setOpenItem(item)}
      >
        <p>{item.name}</p>
        <p>{convertToPrice(item.price)}</p>
      </Item>
    ))}
  </List>
);
