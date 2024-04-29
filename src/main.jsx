import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyDCxgOcfJaD9RCyiqzKKEOzt3rvvDm8FXY',
  authDomain: 'primer-ecommerce-37357.firebaseapp.com',
  projectId: 'primer-ecommerce-37357',
  storageBucket: 'primer-ecommerce-37357.appspot.com',
  messagingSenderId: '406540923099',
  appId: '1:406540923099:web:0648cb5f052cb890595cfe',
};

initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
