import React, { useState } from 'react';
import './Registration.css';

const Registration = ({ setPage }) => {
  const [formData, setFormData] = useState({
    name: '', email: '', age: '',
    course: 'btechcse', gender: '',
    skills: [], address: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData(prev => ({
        ...prev,
        skills: checked ? [...prev.skills, value] : prev.skills.filter(s => s !== value)
      }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.age || !formData.gender) {
      alert('Please fill in all required fields.');
      return;
    }
    setSubmitted(true);
  };

  const steps = [
    { label: 'Personal Info', hint: 'Name, email, age',  done: !!(formData.name && formData.email && formData.age) },
    { label: 'Programme',    hint: 'Course selection',   done: !!formData.course },
    { label: 'Background',   hint: 'Gender & skills',    done: !!formData.gender },
    { label: 'Address',      hint: 'Contact details',    done: !!formData.address },
  ];
  const activeStep = steps.findIndex(s => !s.done);

  const courseNames = { btechcse: 'B.E. CSE', btechcivil: 'B.E. Civil', btechmech: 'B.E. Mech' };

  return (
    <div className="page">
      <div className="reg-wrap">
        <aside className="reg-sidebar">
          <div className="sidebar-title">Application</div>
          <p className="sidebar-sub">Complete all sections to submit your registration.</p>
          <div className="progress-steps">
            {steps.map((s, i) => (
              <div key={s.label} className={`step ${s.done ? 'done' : (i === activeStep || activeStep === -1 ? 'active' : '')}`}>
                <div className="step-dot">{s.done ? '✓' : i + 1}</div>
                <div className="step-info">
                  <div className="step-name">{s.label}</div>
                  <div className="step-hint">{s.hint}</div>
                </div>
              </div>
            ))}
          </div>
        </aside>

        <main className="reg-main">
          <h2 className="reg-section-title">Student Registration</h2>
          <p className="reg-section-sub">Fields marked with <span className="req">*</span> are required.</p>

          <form onSubmit={handleSubmit}>
            <p className="section-label">Personal Information</p>
            <div className="form-row">
              <div className="field">
                <label>Full Name <span className="req">*</span></label>
                <input type="text" name="name" placeholder="e.g. Aravind Kumar" value={formData.name} onChange={handleChange} required />
              </div>
              <div className="field">
                <label>Email Address <span className="req">*</span></label>
                <input type="email" name="email" placeholder="you@email.com" value={formData.email} onChange={handleChange} required />
              </div>
            </div>
            <div className="form-row">
              <div className="field">
                <label>Age <span className="req">*</span></label>
                <input type="number" name="age" placeholder="e.g. 18" min="16" max="35" value={formData.age} onChange={handleChange} required />
              </div>
              <div className="field">
                <label>Select Programme <span className="req">*</span></label>
                <select name="course" value={formData.course} onChange={handleChange}>
                  <option value="btechcse">B.E. Computer Science &amp; Engg.</option>
                  <option value="btechcivil">B.E. Civil Engineering</option>
                  <option value="btechmech">B.E. Mechanical Engineering</option>
                </select>
              </div>
            </div>

            <hr className="form-divider" />
            <p className="section-label">Gender &amp; Skills</p>

            <div className="form-row single">
              <div className="field">
                <label>Gender <span className="req">*</span></label>
                <div className="radio-row">
                  {['Male', 'Female', 'Other'].map(g => (
                    <label className="radio-opt" key={g}>
                      <input type="radio" name="gender" value={g} checked={formData.gender === g} onChange={handleChange} />
                      <span className="radio-box"></span>
                      {g}
                    </label>
                  ))}
                </div>
              </div>
            </div>

            <div className="form-row single">
              <div className="field">
                <label>Technical Skills</label>
                <div className="checkbox-grid">
                  {['JAVA', 'C++', 'C', 'Python'].map(skill => (
                    <label className="check-opt" key={skill}>
                      <input type="checkbox" value={skill} checked={formData.skills.includes(skill)} onChange={handleChange} />
                      <span className="check-box">✓</span>
                      {skill}
                    </label>
                  ))}
                </div>
              </div>
            </div>

            <hr className="form-divider" />
            <p className="section-label">Address Details</p>

            <div className="form-row single">
              <div className="field">
                <label>Residential Address</label>
                <textarea name="address" rows="3" placeholder="Street, City, State, PIN Code" value={formData.address} onChange={handleChange}></textarea>
              </div>
            </div>

            <div className="submit-row">
              <span className="submit-note">Your data is secure and private.</span>
              <button type="submit" className="btn-submit">
                Submit Application
                <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 8h10M9 4l4 4-4 4" />
                </svg>
              </button>
            </div>
          </form>
        </main>
      </div>

      {submitted && (
        <div className="success-overlay" onClick={() => { setSubmitted(false); setPage('home'); }}>
          <div className="success-card" onClick={e => e.stopPropagation()}>
            <div className="success-icon">🎓</div>
            <h3>Application Received!</h3>
            <p>
              Thank you, <strong>{formData.name}</strong>! Your registration for{' '}
              <strong>{courseNames[formData.course]}</strong> has been submitted.
              We'll reach out to {formData.email} shortly.
            </p>
            <button className="btn-primary full-width" onClick={() => { setSubmitted(false); setPage('home'); }}>
              Back to Home
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Registration;
