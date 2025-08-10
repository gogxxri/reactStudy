import { useState } from 'react';
import Header from './components/Header';
import UserInput from './components/UserInput.jsx';
import Results from './components/Results.jsx';

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

 const inputIsValid = userInput.duration >= 1

  const handleChange = (inputIdentifier, newVal) => {
    setUserInput(prev => {
      return {
        ...prev,
        [inputIdentifier]: +newVal,
      }
    })

  }

  return (
    <>
      <Header />
      <UserInput _handleChange={handleChange} userInput={userInput} />
      {inputIsValid ?  <Results resultInput={userInput} /> : <p className ="center">Please enter a duration greater then Zero</p>}
    </>
  )
}

export default App
