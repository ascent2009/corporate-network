import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
// import DoubleIncreaser from './components/Training'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      {/* <DoubleIncreaser /> */}
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);