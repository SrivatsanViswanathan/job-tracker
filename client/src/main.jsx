import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

import customFetch from './utils/customFetch.js';

async function fetchData() {
  await customFetch.get('/test');
}

fetchData();

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <App />
    <ToastContainer position='top-center' autoClose={1500}></ToastContainer>
  </>
);
