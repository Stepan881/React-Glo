import styled from 'styled-components';

export const ButtonCheckout = styled.button`
  width: 320px;
  margin: 0 auto 50px;
  padding: 9px 15px;
  background: #299b01;
  border-color: transparent;
  color: white;
  
  transition: 0.3s;
  &:hover {
    transition: 0.3s;
    background: #fff;
    color: #299b01;
    border-color: #299b01;
  }
  &:disabled {
    color: #bbb;
    background: #ccc;
    border-color: #aaa;
  }
`;

