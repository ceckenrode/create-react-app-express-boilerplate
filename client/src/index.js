import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

window.fetch('/1')
  .then(response => response.json())
  .then(data => console.log(data));

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
