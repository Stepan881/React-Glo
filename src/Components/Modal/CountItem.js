import React from 'react';

import styled from 'styled-components';


const CountWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;
const CountInput = styled.input`
  width: 50px;
  font-size: 20px;
`;
const ButtonCount = styled.button`
  border-radius: 3px;
  background-color: transparent; 
  border: 1px solid #299b01;
  width: 30px;
  margin: 0 5px;
   &:hover {
    background-color: #299b01;
    color: white;
    border-color: black;
   }
`;

const FormWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export function CountItem({count, setCount, onChange}) {
  return (
    <CountWrapper>
      <span>Количество</span>
      <div>
        <ButtonCount disabled={count <= 1} onClick={() => {setCount(count - 1)}}>-</ButtonCount>
        <CountInput type='number' min='1' max='100' value={count < 1 ? 1 : count} onChange={onChange}/>
        <ButtonCount onClick={() => {setCount(+count + 1)}}>+</ButtonCount>
      </div>
    </CountWrapper>
  )
}
