import React from 'react';
import ReactDOM from 'react-dom';
import './components/App/App.scss';
import App from './components/App/App';
import 'normalize.css';
import './style/style.scss';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

