import React from 'react';
import ReactDOM from 'react-dom/client'; // React 18+ uses `react-dom/client`
import App from './App';
import './index.css'; // Optional: for your global styles
import { FronteggProvider } from '@frontegg/react';


const ContextOptions  = {
  domain: 'app-xcmgju16yl2s.frontegg.com',
  clientId: '726efa15-ade1-410c-9bc2-70b693be9e60',
  baseUrl: 'https://app-xcmgju16yl2s.frontegg.com',
  appId: '29f34a11-2d2a-490b-9818-9d52bebfcba3'
};


// const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(document.getElementById('root')); // Create a root for React 18+ (use `ReactDOM.render` for older versions)

root.render(
  <FronteggProvider 
  contextOptions={ContextOptions} >
      <App />
  </FronteggProvider>,
  document.getElementById('root')
);
