import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './index.css';
import { Dashboard } from './view/dashboard/dashboard/Dashboard';
import './view/dashboard/home/Homepage.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
   
      <BrowserRouter>
        <Dashboard />
      </BrowserRouter>

  </React.StrictMode>
);