import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
// import Navbar from "./components/navbar";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <Navbar /> */}
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
