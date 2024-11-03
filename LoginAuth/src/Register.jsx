import { useState } from "react";
import "./register.css";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [register, setRegister] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:5000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((result) => {
        setRegister(true);
      })
      .catch((err) => {
        console.log(err);
        setRegister(false);
      });
  }
  return (
    <div className="form-container">
      <h2>Register</h2>

      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <div className="form-group">
          <label for="email">Email Address</label>
          <input
            type="email"
            id="email"
            placeholder="enter email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>

        <div className="form-group">
          <label for="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="enter password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>

        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>

      {register ? (
        <p>You are registered succesfully</p>
      ) : (
        <p>You are Not registered due to some error </p>
      )}
    </div>
  );
}
