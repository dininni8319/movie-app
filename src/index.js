import React from 'react';
import { render } from 'react-dom';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import './index.css';
import App from './components/Views/Home/App';
import Navbar from './components/UI/Navbar/Navbar';
import Sign from './components/Views/Sign/Sign';


render(
  <React.StrictMode>
    <Router>
    <Navbar />
    <Routes>
    
      <Route path='/' element={<App />} />
      <Route path='/sign' element={<Sign />} />
    </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);


