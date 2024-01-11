import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { App } from './App';
import store from './store/index'; // Імпортуйте ваш Redux store
import './index.css';
import './normalize.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}> {/* Обгортання App у Provider */}
      <App />
    </Provider>
  </React.StrictMode>
);
