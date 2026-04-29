import React from 'react';
import './Home.css';

const Home = ({ setPage }) => (
  <div className="page">
    <div className="home-hero">
      <div className="home-left">
        <p className="home-eyebrow">Est. 1995 · Excellence in Education</p>
        <h1 className="home-title">Shape Your <em>Future</em> Here</h1>
        <p className="home-desc">
          A world-class technical institution committed to bridging classroom
          learning with real-world industry demands. Your journey starts now.
        </p>
        <div className="home-btns">
          <button className="btn-primary" onClick={() => setPage('register')}>Apply Now</button>
          <button className="btn-secondary" onClick={() => setPage('about')}>Learn More</button>
        </div>
      </div>
      <div className="home-right">
        <div className="stat-grid">
          {[
            { num: '28+', label: 'Years of Excellence' },
            { num: '12K+', label: 'Alumni Worldwide' },
            { num: '96%', label: 'Placement Rate' },
            { num: '3', label: 'Core Programs' },
          ].map(s => (
            <div className="stat-card" key={s.label}>
              <div className="stat-num">{s.num}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default Home;
