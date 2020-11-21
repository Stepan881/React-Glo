import React from 'react';
import styled from 'styled-components';
import trashImage from '../../img/trash.svg';

import {totalPriceItems} from '../Modal/ModalItem';
import {convertToPrice} from '../Functions/secondaryFunction';

const OrderItemStyled = styled.li`
  display: flex;
  margin: 15px 0;
`;
const TrashButton = styled.button`
  width: 24px;
  height: 24px;
  border-color: transparent;
  background-image: url(${trashImage});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
 
`;
const ItemName = styled.span`
  flex-grow: 1;
  
`;
const ItemPrice = styled.span`
  margin-left: 20px;
  margin-right: 10px;
  min-width: 65px;
  text-align: right;
`;


export const OrderListItem = ({order}) => {
  return (
    <OrderItemStyled>
      <ItemName>{order.name}</ItemName>
      <span>{order.count}</span>
      <ItemPrice>{convertToPrice(totalPriceItems(order))}</ItemPrice>
      <TrashButton />
    </OrderItemStyled>
  );
}
