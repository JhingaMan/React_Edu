import { useState } from "react"
import "./style.css"

function App() {
  const [steps , setSteps] = useState(1)
  const [count , setCount] = useState(0)

  function handleStepsInc(){
    setSteps((steps)=>steps+1)
  }

  function handleStepsDec(){
    if(steps>1)
    setSteps((steps)=>steps-1)
  }

  function handleCountInc(){
    setCount((count)=>count+steps)
  }
  
  function handleCountDec(){
    setCount((count)=>count-steps)
  }

  const date = new Date("june 21 2027")
  date.setDate(date.getDate() + count)

  return (
    <div className="app">
      <div className="button-section">
        <button className="btn" onClick={handleStepsInc}>+</button>
        <p>Steps: {steps}</p>
        <button className="btn" onClick={handleStepsDec}>-</button>
      </div>

      <div className="button-section">
        <button className="btn" onClick={handleCountInc}>+</button>
        <p>Count: {count}</p>
        <button className="btn" onClick={handleCountDec}>-</button>
      </div>

      <div className="display-message">
        <p>{count>=0 ? (count == 0 ? `Today is ` : `${count} days form today is `): (`${-1 * count} days ago was `)}{date.toDateString()}</p>
      </div>

    </div>
  )
}

export default App
