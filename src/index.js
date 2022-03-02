import React from 'react';
import { render } from 'react-dom';
import { ConfigProvider } from './Context/ConfigContext/ConfigContext';
import { MovieProvider } from './Context/MovieContext/MovieContext';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import ProtectedRoute from './Utilities/ProtectedRoute';
import './index.css';
import App from './components/Views/Home/App';
import Navbar from './components/UI/Navbar/Navbar';
import Sign from './components/Views/Sign/Sign';
import MovieDetail from './components/Views/MovieDetail/MovieDetail';

render(

  <React.StrictMode>
    <ConfigProvider>
      <MovieProvider>
        
        <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={
            <ProtectedRoute >
              <App />
            </ProtectedRoute>
            
          } />

          <Route path='/movie/:slug' element={
            <ProtectedRoute >
              <MovieDetail />
            </ProtectedRoute>
            
          } />
          <Route path='/sign' element={<Sign />} />
        </Routes>
        </Router>

      </MovieProvider>

    </ConfigProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


