import React from 'react';
import styled from 'styled-components';

import {OrderListItem} from './OrderListItem';
import {ButtonCheckout} from '../Styleds/ButtonCheckout';
import {convertToPrice, totalPriceItems} from '../Functions/secondaryFunction';

const OrderStyled = styled.section`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 80px;
  left: 0;
  background: #fff;
  width: 380px;
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

export const Order = ({orders, setOrders, setOpenItem}) => {

  const deleteItem = index => {
    const newOrders = [...orders];
    newOrders.splice(index, 1);
    setOrders(newOrders);
  };

  const total = orders.reduce((res, order) => totalPriceItems(order) + res, 0);
  const totalCounter = orders.reduce((res, order) => order.count + res, 0);
  return (
    <OrderStyled>
      <OrderTitle>ВАШ ЗАКАЗ</OrderTitle>
        <OrderContent>
          {orders.length ?
            <OrderList>
              {orders.map((order, index)=> <OrderListItem
                key={index}
                order={order}
                deleteItem={deleteItem}
                index={index}
                setOpenItem={setOpenItem}
              />)}
            </OrderList> :
          <EntryList>Список заказов пуст</EntryList>}
        </OrderContent>
      <Total>
        <span>И того</span>
        <span>{totalCounter}</span>
        <TotalPrice>{convertToPrice(total)}</TotalPrice>
      </Total>
      <ButtonCheckout>Оформить</ButtonCheckout>
    </OrderStyled>
  )
};
//
