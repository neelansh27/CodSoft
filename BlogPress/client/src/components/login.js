import React, { useState } from "react";
import {Link} from "react-router-dom"

function Login() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const handleEmail = (e) => {
    setemail(e.target.value);
  };
  const handlePassword = (e) => {
    setpassword(e.target.value);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:3000/login", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    }).then((res) => console.log(res));
  };
  return (
    <form onSubmit={handleSubmit}>
    <h1>Login</h1>
      <div>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" value={email} onChange={handleEmail} />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={handlePassword}
        />
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    <Link to="/auth/register">New Here? Sign Up</Link>
    </form>
  );
}

export default Login;