import React from 'react';

import {NavBar} from './Components/NavBar';
import {Menu} from './Components/Menu';

import {GlobalStyle} from './Components/GlobalStyle.js';

function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <NavBar />
      <Menu />
    </React.Fragment>
  );
}

export default App;
