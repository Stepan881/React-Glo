import React from 'react';
import styled from 'styled-components';

const ToppingsWrap = styled.div`
  column-count: 2;
  max-width: 500px;
  margin: 0 auto;
  column-gap: 15px;
`;
const ToppingsLabel = styled.label`
  cursor: pointer;
  display: block;
  width: 100%;

`;
const ToppingsCheckbox = styled.input`
  cursor: pointer;
  margin: 7px;
`;


export const Toppings = ({ toppings, checkToppings }) => {
  return (
    <>
      <h3>Добавки</h3>
      <ToppingsWrap>
        {toppings.map((item, i) => (
          <ToppingsLabel key={i}>
            <ToppingsCheckbox
              type='checkbox'
              checked={item.checked}
              onChange={() => checkToppings(i)}
            />
            {item.name}
          </ToppingsLabel>
        ))}
      </ToppingsWrap>
    </>
  );
};
