
import React from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';

// 1. Welcome Page
function Welcome() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Welcome to Feedback System</h1>
      <h2>We Value Your Opinion!</h2>
      <p>Please share your experience with us.</p>

      <button onClick={() => navigate('/feedback')}>
        Get Started
      </button>
    </div>
  );
}

// 2. Feedback Page
function Feedback() {
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    navigate('/thankyou');
  }

  return (
    <div>
      <h1>Feedback Form</h1>

      <form onSubmit={handleSubmit}>

        <h3>1. How is our website?</h3>
        <label><input type="radio" name="q1" required /> Good</label>
        <label><input type="radio" name="q1" /> Better</label>
        <label><input type="radio" name="q1" /> Bad</label>

        <h3>2. How is our service?</h3>
        <label><input type="radio" name="q2" required /> Good</label>
        <label><input type="radio" name="q2" /> Better</label>
        <label><input type="radio" name="q2" /> Bad</label>

        <h3>3. Are you satisfied with our system?</h3>
        <label><input type="radio" name="q3" required /> Good</label>
        <label><input type="radio" name="q3" /> Better</label>
        <label><input type="radio" name="q3" /> Bad</label>

        <br /><br />
        <button type="submit">Submit</button>

      </form>
    </div>
  );
}

// 3. Thank You Page
function ThankYou() {
  return (
    <div>
      <h1>Thank You!</h1>
      <h2>Your feedback submitted successfully.</h2>
      <p>Have a nice day!</p>
    </div>
  );
}

// Main App
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/thankyou" element={<ThankYou />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


