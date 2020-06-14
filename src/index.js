import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Main app styles entry point
import "./styles/index.scss";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
