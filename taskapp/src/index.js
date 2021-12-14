import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { getToDoItems } from './api/itemsAPI';

console.log(getToDoItems)
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


