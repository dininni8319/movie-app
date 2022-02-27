import React from 'react';
import { render } from 'react-dom';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import './index.css';
import App from './App';
import LoginRegister from './components/Views/LoginRegister/LoginRegister';


render(
  <React.StrictMode>
    <Router>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/login-register' element={<LoginRegister />} />
    </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);


