import React, { useState } from "react";
import { login } from "../api/api";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    try {
      const res = await login({ email, password });
      localStorage.setItem("token", res.data.token);
      alert("Login realizado!");
    } catch (err) {
      alert("Erro no login");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input placeholder="Email" onChange={e => setEmail(e.target.value)} />
      <input placeholder="Senha" type="password" onChange={e => setPassword(e.target.value)} />
      <button onClick={handleSubmit}>Entrar</button>
    </div>
  );
}

export default Login;
