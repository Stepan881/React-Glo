import React from 'react';
import styled from 'styled-components';


const ChoicesWrap = styled.div`
  column-count: 2;
  max-width: 500px;
  margin: 0 auto;
  column-gap: 15px;
`;
const ChoicesRadio = styled.input`
  cursor: pointer;
  margin: 7px;
`;
const ChoicesLabel = styled.label `
  cursor: pointer;
  display: block;
  width: 100%;
`;

export function Choices({openItem, choice, changeChoices}) {
  return (
    <>
      <h3>Выбирайте</h3>
      <ChoicesWrap>
        {openItem.choices.map((item, i) => (
          <ChoicesLabel key={i}>
            <ChoicesRadio
              type='radio'
              name='choices'
              checked={choice === item}
              value={item}
              onChange={changeChoices}
            />
            {item}
          </ChoicesLabel>
        ))}
      </ChoicesWrap>
    </>
  );
}
