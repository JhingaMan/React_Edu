import { useState } from "react";

function App() {
  const [value, setValue] = useState(0);
  const [pTip, setPTip] = useState(0);
  const [fTip, setFTip] = useState(0);

  const avgTip = Math.floor((Number(pTip) + Number(fTip)) / 2) ;

  const totalValue = Number(value) + avgTip 

  return (
    <div>
      <Hero
        value={value}
        setValue={setValue}
        pTip={pTip}
        setPTip={setPTip}
        fTip={fTip}
        setFTip={setFTip}
      />
      <Description totalValue={totalValue} value={value} avgTip={avgTip}/>
    </div>
  );
}

export default App;

function Hero({ value, setValue, pTip, setPTip, fTip, setFTip }) {
  return (
    <div>
      <div>
        <div style={{ display: "inline-block" }}>How Much was the bill?</div>
        <input
          type="number"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
            console.log(e);
          }}
        />
      </div>
      <div>
        <div style={{ display: "inline-block" }}>
          How did you like the service
        </div>
        <Select value={pTip} setValue={setPTip} />
      </div>
      <div>
        How did your friend like the service
        <Select value={fTip} setValue={setFTip} />
      </div>
    </div>
  );
}

function Select({ value, setValue }) {
  return (
    <select
      value={value}
      onChange={(e) => {
        setValue(e.target.value);
      }}
    >
      <option value={0}>Dissatisfied (0%)</option>
      <option value={5}>It was Okay (5%)</option>
      <option value={10}>It was good (10%)</option>
      <option value={20}>Absolutely Amazing (20%)</option>
    </select>
  );
}

function Description({ totalValue, value, avgTip }) {
  return (
    <>
      {value === 0 ? (
        <div></div>
      ) : (
        <h2>
          You Pay {totalValue} (${value} + ${avgTip})
        </h2>
      )}
      <button>reset</button>
    </>
  );
}
