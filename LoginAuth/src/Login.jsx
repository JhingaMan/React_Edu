import { useState } from "react";
import "./register.css";
import Cookies from "universal-cookie"

const cookies = new Cookies();

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:5000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    }).then((response)=>{
        if(!response.ok){
            throw new Error("Login failed");
        }
        return response.json()
    })
      .then((result) => {
        setLogin(true);
        console.log("Login successful:", result);
        cookies.set("TOKEN", result.data.token , {
            path: '/',
        })
        window.location.href = "/auth"
      })
      .catch((err) => {
        console.log(err);
        setLogin(false);
      });
  }
  return (
    <div className="form-container">
      <h2>Login</h2>

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

      {login ? (
        <p>Your Login is succesfully</p>
      ) : (
        <p>Login not succesful</p> 
      )}
    </div>
  );
}
