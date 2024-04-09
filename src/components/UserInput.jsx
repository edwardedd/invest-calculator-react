export default function UserInput({onChangeInput, userInput}){
  
  return <section id="user-input">
    <div className="input-group">
      <p>
        <label>Initial Investment</label>
        <input
          type="number"
          value={userInput.initialInvestment}
          required
          onChange={(event) => onChangeInput('initialInvestment', event.target.value)}/>
      </p>
      
      <p>
        <label>Annual Investment</label>
        <input
          type="number"
          required
          value={userInput.annualInvestment}
          onChange={(event) => onChangeInput('annualInvestment', event.target.value)}/>
      </p>
    </div>
    <div className="input-group">
      <p>
        <label>Expext return</label>
        <input
          type="number"
          required
          value={userInput.expectedReturn}
          onChange={(event) => onChangeInput('expectedReturn', event.target.value)}/>
      </p>
      
      <p>
        <label>Duration</label>
        <input
          type="number"
          required
          value={userInput.duration}
          onChange={(event) => onChangeInput('duration', event.target.value)}/>
      </p>
    </div>
  </section>
}