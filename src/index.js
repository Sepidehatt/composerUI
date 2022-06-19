import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ComposerProvider, createBreakpoints } from '@cmpsr/components';
import {theme} from './theme'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <ComposerProvider theme={theme} >
      <App />
    </ComposerProvider>
  </React.StrictMode>
);


