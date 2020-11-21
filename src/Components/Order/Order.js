import React from 'react';
import styled from 'styled-components';

import {OrderListItem} from './OrderListItem';
import {ButtonCheckout} from '../Styleds/ButtonCheckout';

const OrderStyled = styled.section`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 80px;
  left: 0;
  background: #fff;
  min-width: 380px;
  height: calc(100% - 80px); 
  box-shadow: 3px  4px 5px rgba(0, 0, 0, .3);
  padding: 20px;
`;

const OrderTitle = styled.h2`
  text-align: center;
    margin-bottom: 30px;
`;

const OrderContent = styled.div`
  flex-grow: 1;
`;

const OrderList = styled.ul``;

const Total = styled.div`
  display: flex;
  margin : 0 35px 30px;
  
    & span:first-child {
      flex-grow: 1;
}
`;

const TotalPrice = styled.span`
  text-align: right;
  min-width: 65px;
  margin-left: 20px;
  
`;

const EntryList = styled.p`
  text-align: center;
`;

export const Order = ({orders}) => {
  return (
    <OrderStyled>
      <OrderTitle>ВАШ ЗАКАЗ</OrderTitle>
        <OrderContent>
          {orders.length ?
            <OrderList>
              {orders.map(order=> <OrderListItem order={order}/>)}
            </OrderList> :
          <EntryList>Список заказов пуст</EntryList>}
        </OrderContent>
      <Total>
        <span>И того</span>
        <span>5</span>
        <TotalPrice>850р</TotalPrice>
      </Total>
      <ButtonCheckout>Оформить</ButtonCheckout>
    </OrderStyled>
  )
};
