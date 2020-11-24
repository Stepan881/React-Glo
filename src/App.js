import React from 'react';

import {NavBar} from './Components/NavBar/NavBar';
import {Menu} from './Components/Menu/Menu';
import {ModalItem} from "./Components/Modal/ModalItem";
import {Order} from "./Components/Order/Order";

import {useOpenItem} from './Components/Hooks/useOpenItem';
import {useOrders} from './Components/Hooks/useOrders';

import {GlobalStyle} from './Components/Styleds/GlobalStyle.js';

function App() {

  const openItem = useOpenItem();
  const orders = useOrders();

  return (
    <React.Fragment>
      <GlobalStyle/>
      <NavBar/>
      <Order {...orders} {...openItem} />
      <Menu {...openItem}/>
      {openItem.openItem && <ModalItem {...openItem} {...orders}/>}
    </React.Fragment>
  );
}

export default App;
