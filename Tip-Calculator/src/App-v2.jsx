import { useState } from "react";

function App() {
  return <TipCalculator />;
}

function TipCalculator() {
  const [billValue, setBillValue] = useState("");
  const [percentage1, setPercentage1] = useState(0);
  const [percentage2, setPercentage2] = useState(0);

  const tip = billValue * ((percentage1 + percentage2) / 2 / 100);

  function handleReset() {
    setBillValue("");
    setPercentage1(0);
    setPercentage2(0);
  }

  return (
    <div>
      <BillInput billValue={billValue} onSetBillValue={setBillValue} />
      <SelectPercentage percentage={percentage1} setPercentage={setPercentage1}>
        How did you like the service?{" "}
      </SelectPercentage>
      <SelectPercentage percentage={percentage2} setPercentage={setPercentage2}>
        How did your friend liked the service?{" "}
      </SelectPercentage>
      <Output billValue={billValue} tip={tip} />
      <Reset onReset={handleReset} />
    </div>
  );
}

function BillInput({ billValue, onSetBillValue }) {
  return (
    <div>
      <label>How much was the bill? </label>
      <input
        type="text"
        placeholder="Bill Value"
        value={billValue}
        onChange={(e) => {
          onSetBillValue(Number(e.target.value));
        }}
      />
    </div>
  );
}

function SelectPercentage({ percentage, setPercentage, children }) {
  return (
    <div>
      <label>{children}</label>
      <select
        value={percentage}
        onChange={(e) => {
          setPercentage(Number(e.target.value));
        }}
      >
        <option value={0}>Dissatisfied (0%)</option>
        <option value={5}>It was Okay (5%)</option>
        <option value={10}>It was good (10%)</option>
        <option value={20}>Absolutely Amazing (20%)</option>
      </select>
    </div>
  );
}

function Output({ billValue, tip }) {
  return (
    <h3>
      You pay {billValue + tip} (${billValue} + ${tip} tip){" "}
    </h3>
  );
}

function Reset({ onReset }) {
  return (
    <button
      onClick={onReset}
    >
      Reset
    </button>
  );
}

export default App;
