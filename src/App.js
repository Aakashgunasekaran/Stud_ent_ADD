import React, { useState } from 'react';
import Home from './components/Home';
import About from './components/About';
import Registration from './components/Registration';
import './App.css';

const App = () => {
  const [page, setPage] = useState('home');

  return (
    <>
      <nav className="navbar">
        <div className="nav-logo">Tech<span>Campus</span></div>
        <div className="nav-links">
          {['home', 'about', 'register'].map(p => (
            <button
              key={p}
              className={`nav-btn ${page === p ? 'active' : ''}`}
              onClick={() => setPage(p)}
            >
              {p === 'register' ? 'Apply' : p.charAt(0).toUpperCase() + p.slice(1)}
            </button>
          ))}
        </div>
      </nav>

      {page === 'home'     && <Home setPage={setPage} />}
      {page === 'about'    && <About setPage={setPage} />}
      {page === 'register' && <Registration setPage={setPage} />}
    </>
  );
};

export default App;
