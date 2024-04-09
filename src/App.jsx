import Header from "./components/Header.jsx";
import UserInput from "./components/UserInput.jsx";
import {useState} from "react";
import Results from "./components/Result.jsx";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment:6,
    expectedReturn:6,
    duration: 10
  });
  
  const inputIsValid = userInput.duration >= 1;
  
  function handleChange(inputIdentifier, newValue){
    console.log('newValue', newValue)
    setUserInput(prevVal => {
      return{
        ...prevVal,
        [inputIdentifier]: +newValue
      }
    });
  }
  
  return (
    <>
      <Header/>
      <UserInput
        userInput={userInput}
        onChangeInput={handleChange}
      />
      {!inputIsValid && <p className='center'>Please enter valid duration</p>}
      {inputIsValid  && <Results userInput={userInput}/>}
    </>
    
  )
}

export default App
