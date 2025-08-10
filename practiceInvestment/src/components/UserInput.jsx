import React from 'react';

const UserInput = ({_handleChange, userInput}) => {

  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input type="number" value={userInput.initialInvestment} required onChange={(e) => _handleChange('initialInvestment', e.target.value)} />
        </p>
        <p>
          <label>Annual Investment </label>
          <input type="number" value={userInput.annualInvestment} required
                 onChange={(e) => _handleChange('annualInvestment', e.target.value)} />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>ExpectedReturn</label>
          <input type="number" value={userInput.expectedReturn} required
                 onChange={(e) => _handleChange('expectedReturn', e.target.value)} />
        </p>
        <p>
          <label>Duration</label>
          <input type="number" value={userInput.duration} required
                 onChange={(e) => _handleChange('duration', e.target.value)} />
        </p>
      </div>
    </section>
  );
};

export default UserInput;
