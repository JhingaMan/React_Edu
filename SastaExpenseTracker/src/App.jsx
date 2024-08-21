import { useState } from "react";
import "./index.css";

function App() {
  const [transactions, setTransactions] = useState([
    { category: "Salary", type: "Income", amount: "10000" },
    { category: "Travel", type: "Expense", amount: "5000" },
  ]);

  const [showAddTransaction, setAddTransaction] = useState(false);

  function handleAddTransaction() {
    setAddTransaction(!showAddTransaction);
  }

  const calculateBalance = () => {
    return transactions.reduce(
      (acc, { type, amount }) =>
        acc + (type === "Income" ? Number(amount) : -Number(amount)),
      0
    );
  };

  function handleNewTransaction(newTransaction) {
    setTransactions((prevTrasactions) => [...prevTrasactions, newTransaction]);
  }

  return (
    <div className="container">
      <Logo />
      <TopBar
        onAddTransaction={handleAddTransaction}
        showAddTransaction={showAddTransaction}
        balance={calculateBalance()}
      />
      {showAddTransaction && (
        <TransactionForm onNewTransaction={handleNewTransaction} />
      )}
      <Summary transactions={transactions} />
      <TransactionList transactions={transactions} />
    </div>
  );
}

function Logo() {
  return <h1>Expense Tracker</h1>;
}

function TopBar({ onAddTransaction, showAddTransaction, balance }) {
  console.log(balance)
  return (
    <div className="topbar">
      <span>Balance: {balance}</span>
      <button onClick={onAddTransaction}>
        {showAddTransaction ? "Cancel" : "AddTransaction"}
      </button>
    </div>
  );
}

function TransactionForm({ onNewTransaction }) {
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState("");
  const [type, setType] = useState("Income");

  function handleSubmit(e) {
    e.preventDefault();

    const newTransaction = { category, type, amount };

    onNewTransaction(newTransaction);

    setAmount(0);
    setCategory("");
    setType("Income");
  }
  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="amount"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
      />
      <input
        type="text"
        placeholder="category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <div className="radio">
        <input
          type="radio"
          value="Income"
          checked={type === "Income"}
          onChange={(e) => setType(e.target.value)}
        />
        <label>Income</label>
        <input
          type="radio"
          value="Expense"
          checked={type === "Expense"}
          onChange={(e) => setType(e.target.value)}
        />
        <label>Expense</label>
      </div>
      <button>Add Trasaction</button>
    </form>
  );
}

function Summary({ transactions }) {
  const income = transactions.reduce(
    (acc, transaction) =>
      acc + (transaction.type === "Income" ? Number(transaction.amount) : 0),
    0
  );
  const expense = transactions.reduce(
    (acc, transaction) =>
      acc + (transaction.type === "Expense" ? Number(transaction.amount) : 0),
    0
  );
  return (
    <div className="summary">
      <BoxSum Title="Expense" value={expense} />
      <BoxSum Title="Income" value={income} />
    </div>
  );
}

function BoxSum({ Title, value }) {
  return (
    <div className="box">
      <h4>{Title}</h4>
      <h3>{value}</h3>
    </div>
  );
}

function TransactionList({ transactions }) {
  return (
    <div>
      <h3> Transaction</h3>
      {transactions.map((data) => (
        <div>
          <span> {data.category}</span>
          <span>{data.amount}</span>
        </div>
      ))}
    </div>
  );
}

export default App;
