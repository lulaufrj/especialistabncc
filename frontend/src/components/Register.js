import React, { useState } from "react";
import { register } from "../api/api";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [serie, setSerie] = useState("");
  const [disciplina, setDisciplina] = useState("");

  const handleSubmit = async () => {
    try {
      const res = await register({ name, email, password, serie, disciplina });
      alert(res.data.message);
    } catch (err) {
      alert("Erro ao registrar usuário");
    }
  };

  return (
    <div>
      <h2>Registrar</h2>
      <input placeholder="Nome" onChange={e => setName(e.target.value)} />
      <input placeholder="Email" onChange={e => setEmail(e.target.value)} />
      <input placeholder="Senha" type="password" onChange={e => setPassword(e.target.value)} />
      <input placeholder="Série" onChange={e => setSerie(e.target.value)} />
      <input placeholder="Disciplina" onChange={e => setDisciplina(e.target.value)} />
      <button onClick={handleSubmit}>Registrar</button>
    </div>
  );
}

export default Register;
