import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { GlobalStyles } from './style/GlobalStyles';
import store from './redux/store';
import { Provider } from 'react-redux';
import { persistor } from './redux/store'
import { PersistGate } from 'redux-persist/integration/react'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store} >
    <PersistGate persistor={persistor}>
      <GlobalStyles />
      <App />  
    </PersistGate>
  </Provider>

);
