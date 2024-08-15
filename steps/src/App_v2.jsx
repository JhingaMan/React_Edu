import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handlePrevious() {
    if (step > 1) {
      setStep((s) => s - 1);
    }
  }

  function handleNext() {
    if (step < 3) {
      setStep((s) => s + 1);
    }
  }
  function handleIsOpen() {
    setIsOpen((isOpen) => !isOpen);
  }
  return (
    <div>
      <button className="close" onClick={handleIsOpen}>
        x
      </button>

      {isOpen ? (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>

          <StepMessage step={step}>
            <p>{messages[step-1]}</p>
          </StepMessage>

          <div className="buttons">
            {/* <button 
          style={{backgroundColor: "#7950f2" , color: "#fff"}}
          onClick={handlePrevious}
        >
          Previous
        </button>

        <button 
          style={{backgroundColor: "#7950f2" , color: "#fff"}}
          onClick={handleNext}
        >
          Next
        </button> */}
            <Button handleClick={handlePrevious} bgColor="#7950f2" color="#fff">
              <span>👈</span> Previous
            </Button>
            <Button handleClick={handleNext} bgColor="#7950f2" color="#fff">
              Next <span>👉</span>
            </Button>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}

function Button({ handleClick, bgColor, color, children }) {
  return (
    <button
      onClick={handleClick}
      style={{ backgroundColor: bgColor, color: color }}
    >
      {children}
    </button>
  );
}

function StepMessage({step , children}) {
  return(
  <div className="message">
    <h3>step: {step}</h3>
    {children}
  </div>
  )
}

export default App;
