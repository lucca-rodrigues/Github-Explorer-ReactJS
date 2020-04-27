import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyle from './Styles/global';
import Routes from './Routes';


const App: React.FC = () => (
    <>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>     
        <GlobalStyle />  
    </>
  
  );
export default App;
