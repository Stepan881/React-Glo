import React from 'react';
import styled from 'styled-components';

import {ButtonCheckout} from '../Styleds/ButtonCheckout';
import {Toppings} from './Toppings';
import {CountItem} from './CountItem';
import {useCount} from './../Hooks/useCount';
import {convertToPrice} from '../Functions/secondaryFunction';
import {totalPriceItems} from '../Functions/secondaryFunction';
import {useToppings} from '../Hooks/useToppings';

const Overlay = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  z-index: 20;
`;
const Modal = styled.div`
  background-color: #fff;
  width: 600px;
  height: 600px;
  display: flex;
  flex-direction: column;
`;
const Banner = styled.div`
  width: 100%;
  height: 200px;
  background-image: url(${( {img}) => img});
  background-size: cover;
`;
const Content = styled.div`
  padding: 20px;
  background-color: #fff;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
`;
const Header = styled.h3`

`;
const Price = styled.p`
  font-family: Pacifico,sans-serif;

`;
const TotalPriceItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ModalItem = ({openItem, setOpenItem, orders, setOrders}) => {

  const counter = useCount();
  const toppings = useToppings(openItem);

  const closeModal = (e) => {
    if (e.target.id === 'overlay') {
      setOpenItem(null);
    }
  };
  const order = {
    ...openItem,
    count: counter.count,
    topping: toppings.toppings,
  };

  const addToOrder = () => {
    setOrders([...orders, order]);
    setOpenItem(null);
  };

  return (
    <Overlay id='overlay' onClick={closeModal}>
      <Modal>
        <Banner img={openItem.img}/>
        <Content>
          <Wrapper>
            <Header>{openItem.name}</Header>
            <Price>{convertToPrice(openItem.price)}</Price>
          </Wrapper>
          <CountItem {...counter}/>
          {openItem.toppings && <Toppings {...toppings}/> }
          <TotalPriceItem>
            <span>Цена:</span>
            <Price>{convertToPrice(totalPriceItems(order))}</Price>
          </TotalPriceItem>
          <ButtonCheckout onClick={addToOrder}>
            Добавить
          </ButtonCheckout>
        </Content>
      </Modal>
    </Overlay>
  );
};
