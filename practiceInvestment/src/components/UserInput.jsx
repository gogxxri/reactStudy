import React, {useState} from 'react';

const UserInput = () => {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const handleChange = (inputIdentifier, newVal) => {
    console.log(inputIdentifier)
    console.log(newVal)
    setUserInput(prev => {
      return {
        ...prev,
        [inputIdentifier]: newVal,
      }
    })

  }
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input type="number" value={userInput.initialInvestment} required onChange={(e) => handleChange('initialInvestment', e.target.value)} />
        </p>
        <p>
          <label>Annual Investment </label>
          <input type="number" value={userInput.annualInvestment} required
                 onChange={(e) => handleChange('annualInvestment', e.target.value)} />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>ExpectedReturn</label>
          <input type="number" value={userInput.expectedReturn} required
                 onChange={(e) => handleChange('expectedReturn', e.target.value)} />
        </p>
        <p>
          <label>Duration</label>
          <input type="number" value={userInput.duration} required
                 onChange={(e) => handleChange('duration', e.target.value)} />
        </p>
      </div>
    </section>
  );
};

export default UserInput;
