import React, { useContext, useState } from "react";
import UserContext from "../context/UserContext";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setpassword] = useState("");
  const [email, setEmail] = useState("");
  const {setUser}=useContext(UserContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({username,password,email})
  };
  return (
    <div>
      <h2>LOGIN</h2>
      <input
        type="text"
        value={username}
        onChange={(e) => {
          setUsername(e.target.value);
        }}
        placeholder="username"
      ></input>
      <input
        type="text"
        value={password}
        onChange={(e) => {
          setpassword(e.target.value);
        }}
        placeholder="password"
      ></input>
      <input
        type="email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        placeholder="email"
      ></input>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Login;
