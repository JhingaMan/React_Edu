import { useState } from "react"
import "./App.css"

function App() {
  const [steps , setSteps] = useState(1)
  const [count , setCount] = useState(0)

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
        <input type="range" min="0" max="10" value={steps} onChange={(e)=>{setSteps(Number(e.target.value))}}/>
        <p>{steps}</p>
      </div>

      <div className="button-section">
        <button className="btn" onClick={handleCountInc}>+</button>
        <input type="number" placeholder="Number..." value={count} onChange={(e)=>{setCount(Number(e.target.value))}} />
        <button className="btn" onClick={handleCountDec}>-</button>
      </div>

      <div className="display-message">
        <p>{count>=0 ? (count == 0 ? `Today is ` : `${count} days form today is `): (`${-1 * count} days ago was `)}{date.toDateString()}</p>
      </div>

    </div>
  )
}

export default App
