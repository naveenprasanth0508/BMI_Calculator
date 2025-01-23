import React, { useState } from 'react';
import './App.css';
function App() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState('');
  const [status, setStatus] = useState('');
  const calculateBMI = () => {
    if (weight && height) {
      const heightInMeters = height / 100;
      const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
      setBmi(bmiValue);
      if (bmiValue < 18.5) {
        setStatus('Underweight');
      } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
        setStatus('Normal Weight');
      } else if (bmiValue >= 25 && bmiValue < 29.9) {
        setStatus('Overweight');
      } else {
        setStatus('Obese');
      }
    }
  };
  const handleReset = () => {
    setWeight('');
    setHeight('');
    setBmi('');
    setStatus('');
  };
  return (
    <div className="app">
      <div className="container">
        <h1>BMI Calculator</h1>
        <div className="input-group">
          <label>Weight (kg)</label>
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder="Enter weight in kg"
          />
        </div>
        <div className="input-group">
          <label>Height (cm)</label>
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            placeholder="Enter height in cm"
          />
        </div>
        <div className="button-group">
          <button onClick={calculateBMI}>Calculate BMI</button>
          <button onClick={handleReset} className="reset-btn">Reset</button>
        </div>
        {bmi && (
          <div className="result">
            <h2>Your BMI: {bmi}</h2>
            <p className={`status ${status.toLowerCase().replace(' ', '-')}`}>
              Status: {status}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
export default App;
