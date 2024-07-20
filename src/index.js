import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react';

ReactDOM.createRoot.render(
  <React.StrictMode>
    <ChakraProvider>
    <App />
    </ChakraProvider>
  </React.StrictMode>,
   document.getElementById('root')
);