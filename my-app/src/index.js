import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div>
        <Header />
        <MainContent />
        <Footer />
    </div> 
  </React.StrictMode>
);
