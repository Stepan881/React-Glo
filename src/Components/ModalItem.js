import React from 'react';
import styled from 'styled-components';

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

const Head = styled.h3`

`;

const Price = styled.p`
      font-family: Pacifico,sans-serif;
`;

const Btn = styled.button`
  width: 320px;
  margin: 0 auto 50px;
  padding: 9px 15px;
  background: #299b01;
  border: none;
  color: white;

`;

export const ModalItem = ({openItem, setOpenItem}) => {

  function closeModal(e) {
    if (e.target.id === 'overlay') {
      setOpenItem(null);
    }
  }

  if (!openItem) return null;

  return (
    <Overlay id='overlay' onClick={closeModal}>
      <Modal>
        <Banner img={openItem.img}/>
        <Wrapper>
          <Head>{openItem.name}</Head>
          <Price>{openItem.price.toLocaleString('ru-RU', {style: 'currency', currency: 'RUB'})}</Price>
        </Wrapper>
        <Btn>Добавить</Btn>
      </Modal>
    </Overlay>
  );
};
