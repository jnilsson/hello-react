import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function Navbar() {
  return (
      <img src='./logo512.png' width='40px'></img>
  )
}

function MainContent() {
  return (
    <div>
      <h1>Fun facts about React</h1>
      <ul>
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 100k stars on Github</li>
        <li>Is maintainded by Facebook</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ul>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div>
        <Navbar />
        <MainContent />
    </div> 
  </React.StrictMode>
);
