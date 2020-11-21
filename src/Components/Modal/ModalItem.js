import React from 'react';
import styled from 'styled-components';

import {ButtonCheckout} from '../Styleds/ButtonCheckout';


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
  margin-bottom: 20px;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  flex: 1;
`;

const Header = styled.h3`

`;

const Price = styled.p`
      font-family: Pacifico,sans-serif;
`;

export const ModalItem = ({openItem, setOpenItem, orders, setOrders}) => {

  const closeModal = (e) => {
    if (e.target.id === 'overlay') {
      setOpenItem(null);
    }
  };

  const order = {...openItem};

  const addToOrder = () => {
    setOrders([...orders, order])
    setOpenItem(null);
  };

  return (
    <Overlay id='overlay' onClick={closeModal}>
      <Modal>
        <Banner img={openItem.img}/>
        <Wrapper>
          <Header>{openItem.name}</Header>
          <Price>{openItem.price.toLocaleString('ru-RU', {style: 'currency', currency: 'RUB'})}</Price>
        </Wrapper>
        <ButtonCheckout onClick={addToOrder}>
          Добавить
        </ButtonCheckout>
      </Modal>
    </Overlay>
  );
};
