import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import ResetStyles from "./resetStyle/ResetStyles";

ReactDOM.render(
    <>
    <ResetStyles />
  <React.StrictMode>
    <App />
  </React.StrictMode>
    </>,
  document.getElementById('root')
);
