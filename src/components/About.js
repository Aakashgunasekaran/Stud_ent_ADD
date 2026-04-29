import React from 'react';
import './About.css';

const About = ({ setPage }) => (
  <div className="page">
    <div className="about-wrap">
      <div className="about-header">
        <div className="about-year">1995</div>
        <h1 className="about-heading">About Our <em>College</em></h1>
      </div>

      <div className="about-pillars">
        {[
          { n: '01', title: 'World-Class Education', text: 'Dedicated to providing technical education of the highest calibre, fostering innovation and critical thinking in every student.' },
          { n: '02', title: 'Rich Heritage', text: 'Founded in 1995 with a history of academic excellence and an unwavering commitment to shaping future leaders across all disciplines.' },
          { n: '03', title: 'Industry Ready', text: 'We bridge classroom learning with industrial requirements, ensuring graduates are equipped for the demands of a dynamic global workforce.' },
        ].map(p => (
          <div className="pillar" key={p.n}>
            <div className="pillar-num">{p.n}</div>
            <div className="pillar-title">{p.title}</div>
            <p className="pillar-text">{p.text}</p>
          </div>
        ))}
      </div>

      <div className="about-cta">
        <h3>Ready to Begin?</h3>
        <p>Join thousands of students who've built their careers here.</p>
        <button className="btn-primary" onClick={() => setPage('register')}>
          Start Your Journey — Register Now
        </button>
      </div>
    </div>
  </div>
);

export default About;
