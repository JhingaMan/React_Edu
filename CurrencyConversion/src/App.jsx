// `https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD`

import { useEffect, useState } from "react";

export default function App() {
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");
  const [amount, setAmount] = useState(0);
  const [output, setOutput] = useState(null);

  useEffect(function () {
    async function calculateAmount() {
      
      if(amount === 0 || fromCurrency === toCurrency)
        return;

      const res = await fetch(
        `https://api.frankfurter.app/latest?amount=${amount}&from=${fromCurrency}&to=${toCurrency}`
      );
      const data = await res.json();
      console.log(data);
      const convertedRate = data.rates[toCurrency]
      console.log(convertedRate)
      setOutput(convertedRate);
    }
    calculateAmount();
  }, [amount,fromCurrency,toCurrency]);

  return (
    <div>
      <input
        type="text"
        value={amount}
        onChange={(e) => {
          setAmount(Number(e.target.value));
        }}
      />
      <select
        value={fromCurrency}
        onChange={(e) => {
          setFromCurrency(e.target.value);
        }}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>

      <select
        value={toCurrency}
        onChange={(e) => {
          setToCurrency(e.target.value);
        }}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <p>{output} {toCurrency}</p>
    </div>
  );
}
